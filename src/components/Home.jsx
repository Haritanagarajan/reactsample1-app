
export  function Fullprofile(image) {
    return (
        "https://www.melivecode.com/users/" + image.id + ".png"

    );
}

export function Profile({ image, widths, heights }) {
    return (
        <div>
            <img
            style={{display:'flex',marginLeft:'60',marginRigh:'60'}}
                src={Fullprofile(image)}
                alt={image.id}
                width={widths}
                height={heights}
            />
        </div>
    );
}


export default function Home() {
    return (
        <div>
           
            <Profile
                widths={300}
                heights={300}
                image={
                    {
                        id: "1",
                    }
                }
            />
            <Profile
                widths={300}
                heights={300}
                image={
                    {
                        id: "2",
                    }
                }
            />
            
            <Profile
                widths={300}
                heights={300}
                image={
                    {
                        id: "4",
                    }
                }
            />
            <Profile
                widths={300}
                heights={300}
                image={
                    {
                        id: "5",
                    }
                }
            />
            <Profile
                widths={300}
                heights={300}
                image={
                    {
                        id: "6",
                    }
                }
            />
           
            <Profile
                widths={300}
                heights={300}
                image={
                    {
                        id: "8"
                    }
                }
            />
            <Profile
                widths={300}
                heights={300}
                image={
                    {
                        id: "9",
                    }
                }
            />
            <Profile
                widths={300}
                heights={300}
                image={
                    {
                        id: "10",
                    }
                }
            />
            
        </div>
    );
}