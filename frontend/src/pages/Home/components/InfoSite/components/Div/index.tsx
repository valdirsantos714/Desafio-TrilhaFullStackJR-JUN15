import "./index.css"

interface DivProps {
    h2: string,
    p:string,
    imgUrl:string, 
    altImg:string
}

export const Div = (props: DivProps) => {
    return (
        <section>
            <div className="container-div">
                <div className="elementos-div">
                    <h2 id="h2-div">{props.h2}</h2>
                    <p id="p-div">{props.p}</p>
                </div>
                <img src={props.imgUrl} alt={props.altImg} id="img-div"/>
            </div>
        </section>
    )
}