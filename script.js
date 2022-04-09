var root = am5.Root.new("chartdiv");

root.setThemes([am5themes_Animated.new(root)]);

var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.percent(100),
    height: am5.percent(100),
    layout: root.verticalLayout,
  })
);

var series = container.children.push(
  am5hierarchy.ForceDirected.new(root, {
    downDepth: 1,
    initialDepth: 2,
    topDepth: 1,
    valueField: "value",
    categoryField: "name",
    childDataField: "children",
  })
);

series.data.setAll([
  {
    name: "Root",
    value: 0,
    children: [
      {
        name: "Data Science",
        children: [
          {
            name: "Machine Leaning",
            children: [
              {
                name: "PyTorch",
                value: 800,
              },
              {
                name: "TensorFlow",
                children: [
                  {
                    name: "Keras",
                    value: 600,
                  },
                ],
              },
              {
                name: "Hadoop",
                value: 600,
              },
            ],
          },
          {
            name: "Spark",
            value: 00,
          },
          {
            name: "SkLearn",
            value: 100,
          },
          {
            name: "OpenCV",
            value: 100,
          },
          {
            name: "Pandas",
            value: 100,
          },
          {
            name: "Numpy",
            value: 100,
          },
          {
            name: "Libraries",
            children: [
              {
                name: "D3.js",
                value: 200,
              },
              {
                name: "Matplotlib",
                value: 200,
              },
              {
                name: "Plotly",
                value: 200,
              },
              {
                name: "DGL",
                value: 80,
              },
              {
                name: "NetworkX",
                value: 100,
              },
              {
                name: "am5",
                value: 60,
              },
            ],
          },
        ],
      },
      {
        name: "Programming Languages",
        children: [
          {
            name: "Python",
            value: 500,
          },
          {
            name: "C++",
            value: 400,
          },
          {
            name: "Java",
            value: 400,
          },
          {
            name: "Bash",
            value: 500,
          },
          {
            name: "JavaScript",
            value: 600,
          },
        ],
      },
      {
        name: "Web",
        children: [
          {
            name: "HTML",
            value: 500,
          },
          {
            name: "CSS",
            value: 500,
          },
          {
            name: "NodeJS",
            children: [{
                name:"ExpressJS",
                value:600
            }]
          },
          {
            name: "ReactJS",
            value: 300,
          },
          {
            name: "MaterialUI",
            value: 150,
          },
        ],
      },
      {
        name: "Databases",
        children: [
          {
            name: "NoSQL",
            children:[
                {name: "MongoDB",
                value:800}
            ]
          },
          {
            name: "SQL",
            children:[
                {name:"SQLite",
                value:500}
            ]
          },
        ],
      },
    ],
  },
]);
series.set("selectedDataItem", series.dataItems[0]);
