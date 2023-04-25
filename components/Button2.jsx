/*
    When passing functions make sure they are in this form (Arrow Function):
    const functionName = () => {
        function content
    }
 */
    const Button = ({message, buttonFunction}) => {
        
        return (
            <div>
                {
                    buttonFunction !=undefined &&
                    <button className="button2" onClick={()=>{buttonFunction()}}>
                        {message}
                    </button>
                }
                {
                    buttonFunction === undefined &&
                    <button className="button2">
                        {message}
                    </button>
                }
            </div> 
         );
    }
     
    export default Button;