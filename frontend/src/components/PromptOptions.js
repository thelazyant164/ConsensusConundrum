import '../style/PromptOptions.css';

export const PromptOptions = ({ options }) => {
  return <>
    <div className="PromptDisplay">
      <div className="RedOption">
        <p>{options.red}</p>
      </div>
      <div className="BlueOption">
        <p>{options.blue}</p>
      </div>
    </div>
  </>
}