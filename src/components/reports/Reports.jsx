import { useState, useEffect } from "react";
import YearChart from "../reusables/YearChart.jsx";
import { mockData } from "../../mock_data.js";
import "../../logic/leaflet";
import "../../logic/markerCluster";

const myMarker = L.icon({
  iconUrl: require("../../mapAssets/icon.svg"),
  iconSize: [20, 25],
  iconAnchor: [10, 13],
  popupAnchor: [0, -12],
  shadowUrl: null,
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});
const Reports = ({ invoices, companies }) => {
  const [chartType, setChartType] = useState("year");
  const [year, setYear] = useState(new Date().getFullYear());
  const findBalance = (invoicesArray) => {
    const balance = invoicesArray.reduce((acc, current) => {
      const companyStatus =
        companies.find((el) => el.id === current.company)?.status ?? "Customer";
      if (companyStatus === "Customer") return acc + current.amount;
      else return acc - current.amount;
    }, 0);
    return balance;
  };
  const sortInvoicesPerYear = (invoicesArray) => {
    const answer = invoicesArray.reduce(function (buckets, invoice) {
      if (!buckets[invoice.received.slice(0, 4)])
        buckets[invoice.received.slice(0, 4)] = [];
      buckets[invoice.received.slice(0, 4)].push(invoice);
      return buckets;
    }, {});
    return answer;
  };
  const switchChart = (chartType) => {
    setChartType(chartType);
  };
  //. Loading Map .
  useEffect(() => {
    //* Making sure the map does not exist yet .
    const container = document.querySelector(".mapContainer");
    if (container.querySelector("#map")) return;
    //* Creating the map div .
    let mapDiv = document.createElement("div");
    mapDiv.id = "map";
    container.append(mapDiv);
    //* Initializing the map .
    const map = L.map("map").setView([50.632557, 5.579666], 10);
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(map);
    //* Adding markers .
    const markers = new L.MarkerClusterGroup();
    for (let company of companies) {
      const coords = [company.latitude, company.longitude];
      markers.addLayer(
        L.marker(coords, { icon: myMarker }).bindPopup(company.name)
      );
    }
    map.addLayer(markers);
  }, []);
  //. JSX.
  return (
    <main className="reports">
      <div className="card">
        <h2>
          Revenue flow for{" "}
          <select
            name="year"
            id="year"
            onChange={(e) => setYear(e.target.value)}
            defaultValue={year}
          >
            {Object.keys(sortInvoicesPerYear(mockData)).map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>{" "}
        </h2>
        <section>
          <div className="canvasContainer">
            <YearChart
              invoices={mockData}
              companies={companies}
              findBalance={findBalance}
              chartType={chartType}
              year={year}
            />
          </div>
        </section>
      </div>
      <div className="card">
        <h2>Quick data</h2>
        <section>
          <h3>Balance :</h3>
          <p>Current balance : {findBalance(invoices)}€</p>
          {Object.keys(sortInvoicesPerYear(invoices))
            .sort((a, b) => b - a)
            .map((key) => {
              return (
                <p key={key}>
                  {key} : {findBalance(sortInvoicesPerYear(invoices)[key])}€
                </p>
              );
            })}
        </section>
        <section>
          <br />
          <h3>Invoices that need to be paid : </h3>
          {invoices.filter((el) => !el.paid).length}
        </section>
      </div>
      <div className="card mapContainer">
        <h2>Companies Location</h2>
      </div>
    </main>
  );
};
export default Reports;
