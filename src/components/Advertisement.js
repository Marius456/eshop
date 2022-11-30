import ReactPlayer from "react-player";

export function Advertisement({ id, name, slogan, description, video }) {
    return <>
        <div
            style={{
                boxSizing: "border-box",
                boxShadow: "0 0 5px #ccc",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                padding: "30px 0"
            }
            }>
            <div>
                <ReactPlayer
                    url={video}
                    playing={true}
                    controls={true}
                    loop={true}
                    muted={true}
                />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{slogan}</p>
                <p>{description}</p>
            </div>
        </div>
    </>
}