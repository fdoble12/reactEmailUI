import CollapsibleEmail from "./CollapsibleEmail"
import data from "../data"

export const EmailContainer = () => {
  var emails = data.data;

  return (
    <div className="emailContainer">
        {emails.forEach((curr) =>{
          <CollapsibleEmail/>
        })}
    </div>
  )
}
export default EmailContainer