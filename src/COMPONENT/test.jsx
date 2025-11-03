function Test() {
    const x = 20;
    let y = "Not eligible";
  
    if (x >= 20) {
      y = "You are eligible";
    } else {
      y = "Not eligible";
    }
  
    return (
      <div>
        <h2>Eligibility Check</h2>
        <p>{y}</p>
      </div>
    );
  }
  
  export default Test;
  