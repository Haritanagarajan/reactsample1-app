import React from "react";

//parent
export function Details({ name, role, years }) {

    return (
        <div class="card" style={{border:'none'}}>
            <p >Hii i am {name}</p>
            <p>I am a {role}</p>
            <p>I have {years} of experience</p>
        </div>
    );

}


//child

export default function News() {

    return (
        <div>

            <div class="card" style={{border:'2px solid black',marginTop:'20px',width:'300px',color:'black',fontWeight:'bold',left:'500px',padding:'30px 40px 10px'}}>

                <Details
                    name="Harita"
                    role="Software Engineer"
                    years="3" />
            </div>


            <div class="card" style={{border:'2px solid black',marginTop:'20px',width:'300px',color:'black',fontWeight:'bold',left:'500px',padding:'30px 40px 10px'}}>
                <Details
                    name="Yamini"
                    role="Software Engineer"
                    years="3"
                />
            </div>


            <div class="card" style={{border:'2px solid black',marginTop:'20px',width:'300px',color:'black',fontWeight:'bold',left:'500px',padding:'30px 40px 10px'}}>
                <Details
                    name="Dharshan"
                    role="Software Engineer"
                    years="3"
                />
            </div>


            <div class="card" style={{border:'2px solid black',marginTop:'20px',width:'300px',color:'black',fontWeight:'bold',left:'500px',padding:'30px 40px 10px'}}>
                <Details
                    name="Karthi"
                    role="Software Engineer"
                    years="3"
                />
            </div>


            <div class="card" style={{border:'2px solid black',marginTop:'20px',width:'300px',color:'black',fontWeight:'bold',left:'500px',padding:'30px 40px 10px'}}>
                <Details
                    name="Harish"
                    role="Software Engineer"
                    years="3"
                />

            </div>

        </div>
    );

}