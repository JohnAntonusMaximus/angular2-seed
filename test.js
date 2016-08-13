var combinations = function (string)
{
    var result = [];

    var loop = function (start,depth,prefix)
    {
        for(var i=start; i<string.length; i++)
        {
            var next = prefix+string[i];
            if (depth > 0)
                loop(i+1,depth-1,next);
            else
                result.push(next);
        }
    }

    for(var i=0; i<string.length; i++)
    {
        loop(0,i,'');
    }

    return result;
};