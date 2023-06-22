import React from 'react';


const styles = `
  @keyframes mymove {
    from { margin-top:0px; }
    to { margin-left: 900px; }
  }
`;
export default function StyleComponent() {
    const div1 = {
        width: '70px',
        height: '50px',
        backgroundColor: 'red',
        animation: 'mymove 5s infinite',
        marginTop: '10px',
    };

    const div2 = {
        width: '60px',
        height: '50px',
        backgroundColor: 'pink',
        animation: 'mymove 8s infinite',
        marginTop: '100px'
    };

    const div3 = {
        width: '50px',
        height: '50px',
        backgroundColor: 'green',
        animation: 'mymove 10s infinite',
        marginTop: '100px'
    };

    const div4 = {
        width: '40px',
        height: '50px',
        backgroundColor: 'yellow',
        animation: 'mymove 11s infinite',
        marginTop: '100px'
    };

    return (
        <div>


            <style>{styles}</style>

            <div style={div1}></div>
            <div style={div2}></div>
            <div style={div3}></div>
            <div style={div4}></div>
            <img src="https://www.melivecode.com/users/3.png" alt="users" width='100px' style={{ animation: 'mymove 5s infinite' }} />
            <img src="https://www.melivecode.com/users/2.png" alt="users" width='100px' style={{
                animation: 'mymove 5s infinite', }} />
            <img src="https://www.melivecode.com/users/6.png" alt="users" width='100px' style={{
                animation: 'mymove 5s infinite',}} />
            <img src="https://www.melivecode.com/users/3.png" alt="users" width='100px' style={{
                animation: 'mymove 5s infinite',}} />
        </div>
    );
}
