import '../style/PromptAnswer.css';

export const PromptAnswer = ({ options }) => {
    return <>
        <div className="PromptDisplay">
            {options.redWin &&
                <div className="RedAnswer">
                    <p>{options.red.replace("?", "")}</p>
                </div>
            }
            {!options.redWin &&
                <div className="BlueAnswer">
                    <p>{options.blue.replace("?", "")}</p>
                </div>
            }
        </div>
    </>
}