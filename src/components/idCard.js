function IdCard() {
    const birthDate = new Date('1992-07-14');

// Obter o nome do dia da semana
const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
const dayOfWeek = daysOfWeek[birthDate.getDay()];

// Obter o nome do mês
const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const month = months[birthDate.getMonth()];

// Formatar a data no formato desejado
const formattedDate = `${dayOfWeek} - ${month} - ${birthDate.getDate()} - ${birthDate.getFullYear()}`;

  return (
    <div style={{width: '1000px'}}>
    <div style={{display: 'flex', border: '2px solid black', padding: '5px', margin:'5px', marginBottom: '2px'}}>
        <img src="https://randomuser.me/api/portraits/men/44.jpg" width="200" height="200" />
        <div>
        <p><strong>Nombre:</strong> João</p>
        <p><strong>Apellido:</strong> Juanito</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Height:</strong> 175m</p>
        <p><strong>Birth:</strong> {formattedDate}</p>
        </div>
    </div>
    <div style={{display: 'flex', border: '2px solid black', padding: '5px', margin:'5px', marginBottom: '2px'}}>
        <img src="https://randomuser.me/api/portraits/women/44.jpg" width="200" height="200"/>
        <div>
        <p><strong>Nombre:</strong> Maria</p>
        <p><strong>Apellido:</strong> Julia</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Height:</strong> 165m</p>
        <p><strong>Birth:</strong> {formattedDate}</p>
        </div>
    </div>
    </div>
  );
}
export default IdCard;
