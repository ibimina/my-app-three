

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
 
};


function App() {

  return (
    <div className="App">
      <div style={{ backgroundColor: hexaColor() }} className="first">
        {hexaColor()}
      </div>
      <div style={{ backgroundColor: hexaColor() }} className="first">
        {hexaColor()}
      </div>
      <div style={{ backgroundColor: hexaColor() }} className="first">
        {hexaColor()}
      </div>
      <div style={{ backgroundColor: hexaColor() }} className="first">
        {hexaColor()}
      </div>
      <div style={{ backgroundColor: hexaColor() }} className="first">
        {hexaColor()}
      </div>
    </div>
  );
}

export default App;
