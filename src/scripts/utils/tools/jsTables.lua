local jsTables = {}

local js = require("js")
local global = js.global

local new = js.new
local typeof = global.typeof

local array = global.Array
local object = global.Object

function jsTables.Construct(t)
    if type(t) ~= "table" then
        error("Expected a table, got " .. type(t))
    end

    if #t > 0 then
        local arr = new(array)

        for i, v in ipairs(t) do
            if type(v) == "table" then
                arr:push(jsTables.Construct(v))
            else
                arr:push(v)
            end
        end

        return arr, "Array"
    else
        local obj = new(object)

        for k, v in pairs(t) do
            if type(v) == "table" then
                obj[k] = jsTables.Construct(v)
            else
                obj[k] = v
            end
        end

        return obj, "Object"
    end
end

return jsTables