class CustomError extends Error 
{
    constructor(message)
    {
        super(message);
        this.name = "CustomError";
    }

}

function throwGenericError()
{
    throw new Error("Generic Error");
}

function throwCustomError()
{
    throw new CustomError("Custom Error");
}

// generic error
try 
{    
    console.log(`Force generic error`)
    console.log(`Generic error try block`);
    throwGenericError();

} 
catch(error)
{
    console.log(`Generic error catch block`);
    console.log(`${error}`);
}
finally
{
    console.log("Generic error finally block");
}

// custom error
try 
{    
    console.log(`Force custom error`)
    console.log(`Custom error try block`);
    throwCustomError();

} 
catch(error)
{
    console.log(`Custom error catch block`);
    console.log(`${error}`);
}
finally
{
    console.log("Custom error finally block");
}