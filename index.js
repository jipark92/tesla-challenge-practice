// render text 5 times
const render5Times = () =>{
    for (let i = 0; i < 5; i++) {
        box.textContent += " world"
        const element = document.createElement("div");
        element.textContent = "world";
        box.appendChild(element);
    }
}


//filter using two select options
const teslaData = [
    {
        region: "US",
        model: "A",
        sales: 150,
    },
    {
        region: "US",
        model: "B",
        sales: 120,
    },
    {
        region: "US",
        model: "C",
        sales: 350,
    },
    {
        region: "EU",
        model: "A",
        sales: 200,
    },
    {
        region: "EU",
        model: "B",
        sales: 100,
    },
    {
        region: "EU",
        model: "C",
        sales: 250,
    },
    {
        region: "CA",
        model: "A",
        sales: 200,
    },
    {
        region: "CA",
        model: "B",
        sales: 100,
    },
    {
        region: "CA",
        model: "C",
        sales: 230,
    },
    {
        region: "CA",
        model: "D",
        sales: 400,
    },
];
const box = document.querySelector(".box");
// console.log(teslaData);


const selectRegion = document.querySelector('.options')

let regionSelect = "ALL"

const renderDefault = () =>{
    const renderData = teslaData 
    .map((data,i)=>{
        const { region, model, sales } = data;
        return `
        <div class="list">
            <p>REGION: ${region}</p>
            <p>MODEL: ${model}</p>
            <p>SALES: ${sales}</p>
        </div>
    `;
    }).join('')
    box.innerHTML = renderData
}
renderDefault()

const renderFilter = () =>{
    selectRegion.addEventListener('change',()=>{
        regionSelect = selectRegion.value 
        const renderData = teslaData
        .filter((data)=>{
            const { region, model, sales } = data;
            if(region === regionSelect)return data
            if(region === regionSelect) return data
            if(region === regionSelect) return data
            if(regionSelect === "ALL") return data
        })
        .map((data) => {
            const { region, model, sales } = data;
            return `
            <div class="list">
                <p>REGION: ${region}</p>
                <p>MODEL: ${model}</p>
                <p>SALES: ${sales}</p>
            </div>
        `;
        })
        .join("");
    box.innerHTML = renderData;
    })
}
renderFilter()