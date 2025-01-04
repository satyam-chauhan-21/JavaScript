//----------------------------------------------------------------------------------//
//                          Getting Key Name By Pressing
//----------------------------------------------------------------------------------//

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => { // yaha "keydown" ek event hai jisse pata chalta hai ki keyboard me key press huyi hai.
    insert.innerHTML = `
    <div class='color'>
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>`
});