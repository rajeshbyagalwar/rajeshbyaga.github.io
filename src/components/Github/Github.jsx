import GitHubCalendar from "react-github-calendar";
export default function Github() {
  const calender = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="App" style={{marginTop:"90px"}} id='github'>
       <h1>Github Calendar</h1>
      <div>
        <div >
          {" "}
          <GitHubCalendar username="rajeshbyaga" transformData={calender} style={{marginLeft:"00px",marginTop:"30px",marginBottom:"10px",gap:'30px',width:"100%",margin:"auto"}} />
          <img
            height="200px"
          width={'100%'}
            src="https://camo.githubusercontent.com/c206bde56a3d6cc972cc499bc8beeeaf7679a19b0610a9faa3c8728d4934d59a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d72616a65736862796167612673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
          />
        </div>
        <div style={{marginTop:"30px"}}>
          <img
            height="200px"
          width={'100%'}

            src="https://camo.githubusercontent.com/e3243824faa14df5d82d8c05826dd9fb8d5146561c3a295904ed0fc8364252e0/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d72616a65736862796167612673686f775f69636f6e733d74727565266c6f63616c653d656e"
            alt="Rajesh-github"
          />

          <img
          width={'100%'}

            height="200px"
            src="https://camo.githubusercontent.com/fc609fde308aa0f7361bc020112e6c92a1835b7640e8cf1f1680ad54da7eeb85/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d72616a657368627961676126"
            alt="Rajesh-github"
          />
        </div>
      </div>
    </div>
  );
}

// ...
