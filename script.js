d3.json("europe.geojson").then(function(geojson) {
var jsonData = [
  {
    "": 0,
    "country_name": "Austria",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "Österreich",
    "capital": "Vienna",
    "area": "83,879 km²",
    "population": "8,917,000",
    "population_per_sq_km": 106.3,
    "male_life_expectancy": 78.9,
    "female_life_expectancy": 83.6,
    "birth_rate": 9.4,
    "death_rate": 10.3
  },
  {
    "": 1,
    "country_name": "Belgium",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "België / Belgique",
    "capital": "Brussels",
    "area": "30,530 km²",
    "population": "11,544,000",
    "population_per_sq_km": 378.1,
    "male_life_expectancy": 78.6,
    "female_life_expectancy": 83.1,
    "birth_rate": 9.9,
    "death_rate": 11
  },
  {
    "": 2,
    "country_name": "France",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "France",
    "capital": "Paris",
    "area": "549,087 km²",
    "population": "67,380,000",
    "population_per_sq_km": 122.7,
    "male_life_expectancy": 79.2,
    "female_life_expectancy": 85.3,
    "birth_rate": 10.9,
    "death_rate": 9.9
  },
  {
    "": 3,
    "country_name": "Germany",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "Deutschland",
    "capital": "Berlin",
    "area": "357,580 km²",
    "population": "83,161,000",
    "population_per_sq_km": 232.6,
    "male_life_expectancy": 78.6,
    "female_life_expectancy": 83.4,
    "birth_rate": 9.3,
    "death_rate": 11.9
  },
  {
    "": 4,
    "country_name": "Liechtenstein",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "Liechtenstein",
    "capital": "Vaduz",
    "area": "161 km²",
    "population": "1,138,137",
    "population_per_sq_km": 237.6,
    "male_life_expectancy": 80.1,
    "female_life_expectancy": 83.6,
    "birth_rate": 9.1,
    "death_rate": 8.2
  },
  {
    "": 5,
    "country_name": "Luxembourg",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "Luxembourg/Lëtzebuerg",
    "capital": "Luxembourg",
    "area": "2,590 km²",
    "population": "1,030,419",
    "population_per_sq_km": 243.4,
    "male_life_expectancy": 79.4,
    "female_life_expectancy": 84.2,
    "birth_rate": 10.2,
    "death_rate": 7.3
  },
  {
    "": 6,
    "country_name": "Netherlands",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "Nederland",
    "capital": "Amsterdam",
    "area": "41,543 km²",
    "population": "17,442,000",
    "population_per_sq_km": 419.8,
    "male_life_expectancy": 79.8,
    "female_life_expectancy": 83.1,
    "birth_rate": 9.7,
    "death_rate": 9.7
  },
  {
    "": 7,
    "country_name": "Switzerland",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "Schweiz / Suisse / Svizzera / Svizra",
    "capital": "Bern",
    "area": "41,290 km²",
    "population": "8,637,000",
    "population_per_sq_km": 209.2,
    "male_life_expectancy": 81.1,
    "female_life_expectancy": 85.2,
    "birth_rate": 9.9,
    "death_rate": 8.8
  },
  {
    "": 8,
    "country_name": "Belarus",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Weißrussland",
    "capital": "Беларусь",
    "area": "207,600 km²",
    "population": "9,380,000",
    "population_per_sq_km": 45.18,
    "male_life_expectancy": 69.3,
    "female_life_expectancy": 79.4,
    "birth_rate": 9.3,
    "death_rate": 13
  },
  {
    "": 9,
    "country_name": "Bulgaria",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "България",
    "capital": "Sofia",
    "area": "111,000 km²",
    "population": "6,934,000",
    "population_per_sq_km": 62.47,
    "male_life_expectancy": 69.9,
    "female_life_expectancy": 77.5,
    "birth_rate": 8.5,
    "death_rate": 18
  },
  {
    "": 10,
    "country_name": "Czech Republic",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "Czechia",
    "capital": "Česko, Česká republika",
    "area": "78,870 km²",
    "population": "10,698,000",
    "population_per_sq_km": 135.6,
    "male_life_expectancy": 75.3,
    "female_life_expectancy": 81.3,
    "birth_rate": 10.3,
    "death_rate": 12.1
  },
  {
    "": 11,
    "country_name": "Hungary",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Magyarország",
    "capital": "Budapest",
    "area": "93,030 km²",
    "population": "9,750,000",
    "population_per_sq_km": 104.8,
    "male_life_expectancy": 72.3,
    "female_life_expectancy": 79.1,
    "birth_rate": 9.6,
    "death_rate": 14.5
  },
  {
    "": 12,
    "country_name": "Moldova",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Moldau",
    "capital": "Moldova",
    "area": "33,850 km²",
    "population": "2,620,000",
    "population_per_sq_km": 77.41,
    "male_life_expectancy": 67.7,
    "female_life_expectancy": 76.3,
    "birth_rate": 9.8,
    "death_rate": 11.8
  },
  {
    "": 13,
    "country_name": "Poland",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Polska",
    "capital": "Warsaw",
    "area": "312,680 km²",
    "population": "37,899,000",
    "population_per_sq_km": 121.2,
    "male_life_expectancy": 72.6,
    "female_life_expectancy": 80.8,
    "birth_rate": 9.4,
    "death_rate": 12.6
  },
  {
    "": 14,
    "country_name": "Romania",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "România",
    "capital": "Bucharest",
    "area": "238,400 km²",
    "population": "19,258,000",
    "population_per_sq_km": 80.78,
    "male_life_expectancy": 70.5,
    "female_life_expectancy": 78.4,
    "birth_rate": 9.2,
    "death_rate": 15.4
  },
  {
    "": 15,
    "country_name": "Russia",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Russische Föderation",
    "capital": "Россия / Rossija",
    "area": "17,098,250 km²",
    "population": "144,104,000",
    "population_per_sq_km": 8.428,
    "male_life_expectancy": 66.5,
    "female_life_expectancy": 76.4,
    "birth_rate": 9.8,
    "death_rate": 14.6
  },
  {
    "": 16,
    "country_name": "Slovakia",
    "Continent": "Europe",
    "region": "Western Europe",
    "local_name": "Slovensko",
    "capital": "Bratislava",
    "area": "49,030 km²",
    "population": "5,459,000",
    "population_per_sq_km": 111.3,
    "male_life_expectancy": 73.5,
    "female_life_expectancy": 80.4,
    "birth_rate": 10.4,
    "death_rate": 10.8
  },
  {
    "": 17,
    "country_name": "Ukraine",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Ukrajina / Україна",
    "capital": "Kiev",
    "area": "603,550 km²",
    "population": "44,135,000",
    "population_per_sq_km": 73.13,
    "male_life_expectancy": 66.4,
    "female_life_expectancy": 76.2,
    "birth_rate": 7.8,
    "death_rate": 15.9
  },
  {
    "": 18,
    "country_name": "Denmark",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Danmark",
    "capital": "Copenhagen",
    "area": "42,920 km²",
    "population": "5,831,000",
    "population_per_sq_km": 135.9,
    "male_life_expectancy": 79.6,
    "female_life_expectancy": 83.6,
    "birth_rate": 10.4,
    "death_rate": 9.4
  },
  {
    "": 19,
    "country_name": "Estonia",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Eesti",
    "capital": "Tallinn",
    "area": "45,340 km²",
    "population": "1,329,000",
    "population_per_sq_km": 29.32,
    "male_life_expectancy": 74.2,
    "female_life_expectancy": 82.7,
    "birth_rate": 9.9,
    "death_rate": 11.9
  },
  {
    "": 20,
    "country_name": "Finland",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Suomi",
    "capital": "Helsinki",
    "area": "338,450 km²",
    "population": "5,530,000",
    "population_per_sq_km": 16.34,
    "male_life_expectancy": 79.4,
    "female_life_expectancy": 85,
    "birth_rate": 8.4,
    "death_rate": 10
  },
  {
    "": 21,
    "country_name": "Iceland",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Ísland",
    "capital": "Reykjavík",
    "area": "103,000 km²",
    "population": "1,366,463",
    "population_per_sq_km": 3.558,
    "male_life_expectancy": 81.7,
    "female_life_expectancy": 84.5,
    "birth_rate": 12.3,
    "death_rate": 6.3
  },
  {
    "": 22,
    "country_name": "Ireland",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Éire / Ireland",
    "capital": "Dublin",
    "area": "70,280 km²",
    "population": "4,986,000",
    "population_per_sq_km": 70.94,
    "male_life_expectancy": 80.4,
    "female_life_expectancy": 84.1,
    "birth_rate": 11.2,
    "death_rate": 6.4
  },
  {
    "": 23,
    "country_name": "Latvia",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Latvija",
    "capital": "Riga",
    "area": "64,490 km²",
    "population": "1,900,000",
    "population_per_sq_km": 29.47,
    "male_life_expectancy": 70.9,
    "female_life_expectancy": 80.1,
    "birth_rate": 9.2,
    "death_rate": 15.2
  },
  {
    "": 24,
    "country_name": "Lithuania",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Lietuva",
    "capital": "Vilnius",
    "area": "65,286 km²",
    "population": "2,795,000",
    "population_per_sq_km": 42.81,
    "male_life_expectancy": 70.1,
    "female_life_expectancy": 80,
    "birth_rate": 9,
    "death_rate": 15.6
  },
  {
    "": 25,
    "country_name": "Norway",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Norge",
    "capital": "Oslo",
    "area": "385,203 km²",
    "population": "5,379,000",
    "population_per_sq_km": 13.97,
    "male_life_expectancy": 81.6,
    "female_life_expectancy": 84.9,
    "birth_rate": 9.8,
    "death_rate": 7.5
  },
  {
    "": 26,
    "country_name": "Sweden",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Sverige",
    "capital": "Stockholm",
    "area": "447,430 km²",
    "population": "10,353,000",
    "population_per_sq_km": 23.14,
    "male_life_expectancy": 80.7,
    "female_life_expectancy": 84.2,
    "birth_rate": 10.9,
    "death_rate": 9.5
  },
  {
    "": 27,
    "country_name": "United Kingdom",
    "Continent": "Europe",
    "region": "Northern Europe",
    "local_name": "Großbritannien und Nordirland",
    "capital": "United Kingdom",
    "area": "243,610 km²",
    "population": "67,215,000",
    "population_per_sq_km": 275.9,
    "male_life_expectancy": 79,
    "female_life_expectancy": 82.9,
    "birth_rate": 10.2,
    "death_rate": 10.4
  },
  {
    "": 28,
    "country_name": "Albania",
    "Continent": "Europe",
    "region": "Southern Europe",
    "local_name": "Republika e Shqipërisë",
    "capital": "Tirana",
    "area": "28,750 km²",
    "population": "2,838,000",
    "population_per_sq_km": 98.71,
    "male_life_expectancy": 77.2,
    "female_life_expectancy": 80.3,
    "birth_rate": 11.5,
    "death_rate": 8.3
  },
  {
    "": 29,
    "country_name": "Greece",
    "Continent": "Europe",
    "region": "Southern Europe",
    "local_name": "Ελλάδα / Elláda",
    "capital": "Athens",
    "area": "131,960 km²",
    "population": "10,701,000",
    "population_per_sq_km": 81.09,
    "male_life_expectancy": 78.6,
    "female_life_expectancy": 83.7,
    "birth_rate": 7.9,
    "death_rate": 12.2
  },
  {
    "": 30,
    "country_name": "Malta",
    "Continent": "Europe",
    "region": "Southern Europe",
    "local_name": "Malta",
    "capital": "Valletta",
    "area": "320 km²",
    "population": "1,000,332",
    "population_per_sq_km": "1,610",
    "male_life_expectancy": 80.8,
    "female_life_expectancy": 84.6,
    "birth_rate": 8.6,
    "death_rate": 7.9
  },
  {
    "": 31,
    "country_name": "Montenegro",
    "Continent": "Europe",
    "region": "Southern Europe",
    "local_name": "Црна Гора / Crna Gora / Mali i Zi",
    "capital": "Podgorica",
    "area": "13,810 km²",
    "population": "1,00,306",
    "population_per_sq_km": 44.99,
    "male_life_expectancy": 73.2,
    "female_life_expectancy": 78.8,
    "birth_rate": 11.4,
    "death_rate": 11.7
  },
  {
    "": 32,
    "country_name": "Portugal",
    "Continent": "Europe",
    "region": "Southern Europe",
    "local_name": "Portugal",
    "capital": "Lisbon",
    "area": "92,226 km²",
    "population": "10,297,000",
    "population_per_sq_km": 111.7,
    "male_life_expectancy": 78,
    "female_life_expectancy": 84.1,
    "birth_rate": 8.2,
    "death_rate": 12
  },
  {
    "": 33,
    "country_name": "Serbia",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Србија Srbija",
    "capital": "Belgrade",
    "area": "88,360 km²",
    "population": "6,899,000",
    "population_per_sq_km": 78.08,
    "male_life_expectancy": 71.4,
    "female_life_expectancy": 77.2,
    "birth_rate": 8.9,
    "death_rate": 16.9
  },
  {
    "": 34,
    "country_name": "Slovenia",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Slovenija",
    "capital": "Ljubljana",
    "area": "20,675 km²",
    "population": "2,102,000",
    "population_per_sq_km": 101.7,
    "male_life_expectancy": 77.8,
    "female_life_expectancy": 83.4,
    "birth_rate": 8.9,
    "death_rate": 11.4
  },
  {
    "": 35,
    "country_name": "Croatia",
    "Continent": "Europe",
    "region": "Eastern Europe",
    "local_name": "Hrvatska",
    "capital": "Zagreb",
    "area": "20,675 km²",
    "population": "4,102,000",
    "population_per_sq_km": 101.7,
    "male_life_expectancy": 77.8,
    "female_life_expectancy": 83.4,
    "birth_rate": 8.9,
    "death_rate": 11.4
  },
  {
    "": 36,
    "country_name": "Italy",
    "Continent": "Europe",
    "region": "Southern Europe",
    "local_name": "Italia",
    "capital": "Rim",
    "area": "302,073 km²",
    "population": "60,205,049",
    "population_per_sq_km": 101.7,
    "male_life_expectancy": 77.8,
    "female_life_expectancy": 83.4,
    "birth_rate": 8.9,
    "death_rate": 11.4
  },
  {
    "": 37,
    "country_name": "Turkey",
    "Continent": "Europe",
    "region": "Southern Europe",
    "local_name": "Türkiye",
    "capital": "Ankara",
    "area": "783.562 km²",
    "population": "84,075,049",
    "population_per_sq_km": 101.7,
    "male_life_expectancy": 77.8,
    "female_life_expectancy": 83.4,
    "birth_rate": 8.9,
    "death_rate": 11.4
  },
  {
    "": 38,
    "country_name": "Spain",
    "Continent": "Europe",
    "region": "Southern Europe",
    "local_name": "España",
    "capital": "Madrid",
    "area": "505,935 km²",
    "population": "47,363,000",
    "population_per_sq_km": 93.62,
    "male_life_expectancy": 79.7,
    "female_life_expectancy": 85.1,
    "birth_rate": 7.1,
    "death_rate": 10.4
  }
]

var width = 900;
var height = 700;
var svg = d3.select("#map")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
   
var projection = d3.geoMercator()
        .fitSize([width, height], geojson);

var path = d3.geoPath()
    .projection(projection);

svg.selectAll("path")
    .data(geojson.features)
    .enter()
    .append("path")
    .attr("d", path) 
    .on("click", function(d, data) {
        var countryName = data.properties.NAME;
        var countryData = jsonData.find(function(country) {
            return country.country_name == countryName;
        });
        if (countryData) {
            d3.select("#data-container")
                .html("<strong>Country:</strong> " + countryData.country_name + "<br>" +
                    "<strong>Region:</strong> " + countryData.region + "<br>" +
                    "<strong>Local Name:</strong> " + countryData.local_name + "<br>" +
                    "<strong>Capital:</strong> " + countryData.capital + "<br>" +
                    "<strong>Area:</strong> " + countryData.area + "<br>" +
                    "<strong>Population:</strong> " + countryData.population + "<br>" +
                    "<strong>Population per sq km:</strong> " + countryData.population_per_sq_km + "<br>" +
                    "<strong>Male Life Expectancy:</strong> " + countryData.male_life_expectancy + "<br>" +
                    "<strong>Female Life Expectancy:</strong> " + countryData.female_life_expectancy + "<br>" +
                    "<strong>Birth Rate:</strong> " + countryData.birth_rate + "<br>" +
                    "<strong>Death Rate:</strong> " + countryData.death_rate);

        var regionCountriesData = jsonData.filter(function(country) {
            return country.region == countryData.region;
        });
        var regionCountryNames = regionCountriesData.map(function(country) {
            return country.country_name;
        });
        var regionCountryPopulations = regionCountriesData.map(function(country) {
            return parseInt(country.population, 10);
        });

        var maxPopulation = d3.max(regionCountryPopulations);
        var scaleFactor = 300 / maxPopulation;

        d3.select("#graph-container")
          .html("")
          .append("div")
          .attr("class", "loader");

        var svg = d3.select("#graph-container")
          .append("svg")
          .attr("width", 800)
          .attr("height", 600);

        var bars = svg.selectAll("rect")
          .data(regionCountryPopulations)
          .enter()
          .append("rect")
          .attr("x", function(d, i) {
            return i * 65;
          })
          .attr("y", function(d) {
            return 350 - d * scaleFactor;
          })
          .attr("width", 30)
          .attr("height", function(d) {
            return d * scaleFactor;
          })
          .attr("fill", "blue")
          .style("opacity", 0);

        var labels = svg.selectAll("text")
          .data(regionCountryPopulations)
          .enter()
          .append("text")
          .text(function(d, i) {
            return regionCountryNames[i];
          })
          .attr("x", function(d, i) {
            return i * 65 + 21;
          })
          .attr("y", function(d) {
            return 380;
          })
          .attr("text-anchor", "middle")
          .attr("font-size", "11px")
          .attr("fill", "black")
          .style("opacity", 0); 

        svg.append("text")
          .attr("x", width / 2)
          .attr("y", 20)
          .attr("text-anchor", "right")
          .attr("font-weight", "bold")
          .attr("font-size", "28px")
          .text("Population ratio in the region");

        var animationDuration = 1000; 
        var animationDelay = 200; 

        d3.select(".loader")
          .style("opacity", 0)
          .transition()
          .duration(animationDuration)
          .style("opacity", 1)
          .transition()
          .duration(animationDuration)
          .style("opacity", 0)
          .remove();

        bars.transition()
          .duration(animationDuration)
          .delay(function(d, i) {
            return i * animationDelay;
          })
          .style("opacity", 1); 

        labels.transition()
          .duration(animationDuration)
          .delay(function(d, i) {
            return i * animationDelay;
          })
          .style("opacity", 1); 

            var data = [
              { name: 'Birth rate', value: countryData.birth_rate },
              { name: 'Death rate', value: countryData.death_rate }
            ];
            
            var width = 800;
            var height = 250;
            var radius = Math.min(width, height) / 2;
            var fixedValue = 11;
            radius += fixedValue;
            
            var svg = d3.select("#graph-container")
              .append("svg")
              .attr("width", width)
              .attr("height", height);
            
            var pie = d3.pie()
              .value(function(d) {
                return d.value;
              });
            
            var arc = d3.arc()
              .outerRadius(radius - 10)
              .innerRadius(0);
            
            var g = svg.append("g")
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            
            var slices = g.selectAll("path")
              .data(pie(data))
              .enter()
              .append("path")
              .attr("d", arc)
              .style("fill", function(d) {
                if (d.data.name === "Birth rate") {
                  return "green";
                } else if (d.data.name === "Death rate") {
                  return "red";
                }
              })
              .style("stroke", "white")
              .style("stroke-width", 0.5)
              .style("opacity", 0); 
            
            var labels = g.selectAll("text")
              .data(pie(data))
              .enter()
              .append("text")
              .attr("transform", function(d) {
                return "translate(" + arc.centroid(d) + ")";
              })
              .attr("dy", "0.35em")
              .attr("text-anchor", "middle")
              .attr("font-size", "25px")
              .attr("fill", "black")
              .text(function(d) {
                return d.data.name;
              })
              .style("opacity", 0); 
            
            
            slices.transition()
              .duration(1000) 
              .delay(function(d, i) {
                return i * 200; 
              })
              .style("opacity", 1); 
            
            labels.transition()
              .duration(1000) 
              .delay(function(d, i) {
                return i * 200; 
              })
              .style("opacity", 1); 
            
    }
  });
});
    