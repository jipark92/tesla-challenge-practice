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
const selectRegion = document.querySelector(".region");
const selectModel = document.querySelector(".model");

let regionSelect = "ALL";
let modelSelect = "ALL";

const checkCondition = (region, model, data) => {
    if (region === regionSelect && modelSelect === "ALL") return data;
    if (region === regionSelect && model === modelSelect) return data;
    if (regionSelect === "ALL" && model === modelSelect) return data;
    if (regionSelect === "ALL" && modelSelect === "ALL") return data;
};

const render = (renderData) => {
    box.innerHTML = renderData;
};

const dataList = (region, model, sales) => {
    return `
    <div class="list">
        <p>REGION: ${region}</p>
        <p>MODEL: ${model}</p>
        <p>SALES: ${sales}</p>
    </div>
`;
};

const renderDefault = () => {
    const renderData = teslaData
        .map((data, i) => {
            const { region, model, sales } = data;
            return dataList(region, model, sales);
        })
        .join("");
    render(renderData);
};
renderDefault();

const renderFilter = () => {
    //region filter
    selectRegion.addEventListener("change", () => {
        regionSelect = selectRegion.value;
        const renderData = teslaData
            .filter((data) => {
                const { region, model, sales } = data;
                return checkCondition(region, model, data);
            })
            .map((data) => {
                const { region, model, sales } = data;
                return dataList(region, model, sales);
            })
            .join("");
        render(renderData);
    });
    //model filter
    selectModel.addEventListener("change", () => {
        modelSelect = selectModel.value;
        const renderData = teslaData
            .filter((data) => {
                const { region, model, sales } = data;
                return checkCondition(region, model, data);
            })
            .map((data) => {
                const { region, model, sales } = data;
                return dataList(region, model, sales);
            })
            .join("");
        render(renderData);
    });
};
renderFilter();

// render text 5 times
// const render5Times = () => {
//     for (let i = 0; i < 5; i++) {
//         box.textContent += " world";
//         const element = document.createElement("div");
//         element.textContent = "world";
//         box.appendChild(element);
//     }
// };
