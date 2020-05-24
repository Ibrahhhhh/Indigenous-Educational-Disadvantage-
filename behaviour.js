
// window.addEventListener('scroll', function(ev) {
//   var myGraph1 = document.getElementById('myGraph1');
//   var distanceToTop = myGraph1.getBoundingClientRect().top;
//   console.log(distanceToTop);
// });


Plotly.newPlot("myDiv", {
  data: [
    {
      x: ["Indigenous Students", "Non-Indigenous Students"],
      y: [87.9, 12.1],
      
      marker:{
    color: ['#45A5DA', '#6000C6'],
  
  },
      type: "bar"
    }
  ],
  layout: {
    title: {
      text: "Percentage of Students within ICSEA Range Based on Ethnicity",
    },
    yaxis: {
      title: {
      text: "Percentage of Students",
    },
        range: [0,100],
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        showline: false,
        ticks: '',
    },
    xaxis: {
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        showline: false,
        ticks: '',
    },
    autosize: true,
    font: {
    color: "rgba(255,255,255,0.8)",
      family: "Aileron", 
      size: 15,
    },
    // width:  70vw, 
    // height: 50vh,

    sliders: [
      {
        pad: { 
          t: 60, },
        bgcolor: "12142C",
        bordercolor: "10142C",
        borderwidth: 4,
      
        activebgcolor: "#dbdde0",
        ticklen: 1,
    
        font: {
          family: "Aileron", 
          size: 12,
          color: "white",
        },


        x: 0,
        len: 1,
        currentvalue: {
          xanchor: "right",
          prefix: "ICSEA: ",
          font: {
            color: "white",
            size: 20, 
            family: "Aileron",
          }
        },


        transition: { duration: 500 },
        // By default, animate commands are bound to the most recently animated frame:
        steps: [
          {
          

            label: "100-600",
          
            method: "animate",
            args: [
              ["100-600"],
              {
                mode: "immediate",
                frame: { redraw: false, duration: 500 },
                transition: { duration: 500 }
              }
            ]
          },
          {
            label: "600-700",
            method: "animate",
            args: [
              ["600-700"],
              {
                mode: "immediate",
                frame: { redraw: false, duration: 500 },
                transition: { duration: 500 }
              }
            ]
          },
          {
            label: "700-800",
            method: "animate",
            args: [
              ["700-800"],
              {
                mode: "immediate",
                frame: { redraw: false, duration: 500 },
                transition: { duration: 500 }
              }
            ]
          },
          {
            label: "800-900",
            method: "animate",
            args: [
              ["800-900"],
              {
                mode: "immediate",
                frame: { redraw: false, duration: 500 },
                transition: { duration: 500 }
              }
            ]
          },
          {
            label: "900-1000",
            method: "animate",
            args: [
              ["900-1000"],
              {
                mode: "immediate",
                frame: { redraw: false, duration: 500 },
                transition: { duration: 500 }
              }
            ]
          },
          {
            label: "1000-1100",
            method: "animate",
            args: [
              ["1000-1100"],
              {
                mode: "immediate",
                frame: { redraw: false, duration: 500 },
                transition: { duration: 500 }
              }
            ]
          },
          {
            label: "1100-1200",
            method: "animate",
            args: [
              ["1100-1200"],
              {
                mode: "immediate",
                frame: { redraw: false, duration: 500 },
                transition: { duration: 500 }
              }
            ]
          },
          {
            label: "1200-1300",
            method: "animate",
            args: [
              ["1200-1300"],
              {
                mode: "immediate",
                frame: { redraw: false, duration: 500 },
                transition: { duration: 500 }
              }
            ]
          }
        ]
      }
    ],
    updatemenus: [
      {
        type: "buttons",
        showactive: false,
        x: 0.05,
        y: 0,
        xanchor: "right",
        yanchor: "top",
        // pad: { t: 60, r: 20 },

        font: {
          family: "Aileron", 
          size: 12,
          
        },
        bgcolor: "rgba(0,0,0,0.01)",
        activecolor: "rgba(0,0,0,0.01)",
        buttons: [
          {
            label: "PLAY",
           
            method: "animate",
            args: [
              null,
              {
                fromcurrent: true,
                frame: { redraw: false, duration: 1000 },
                transition: { duration: 500 }
              }
            ]
          }
        ]
      }
    ]
  },
  // The slider itself does not contain any notion of timing, so animating a slider
  // must be accomplished through a sequence of frames. Here we'll change the color
  // and the data of a single trace:
  frames: [
    {
      name: "100-600",
      data: [
        {
          y: [87.9, 12.1],
          "line.color": "red"
        }
      ]
    },
    {
      name: "600-700",
      data: [
        {
          y: [96.7, 3.3],
          "line.color": "green"
        }
      ]
    },
    {
      name: "700-800",
      data: [
        {
          y: [73.8, 26.2],
          "line.color": "blue"
        }
      ]
    },
    {
      name: "800-900",
      data: [
        {
          y: [28.5, 71.5],
          "line.color": "blue"
        }
      ]
    },
    {
      name: "900-1000",
      data: [
        {
          y: [9.2, 90.8],
          "line.color": "blue"
        }
      ]
    },
    {
      name: "1000-1100",
      data: [
        {
          y: [2.7, 97.3],
          "line.color": "blue"
        }
      ]
    },
    {
      name: "1100-1200",
      data: [
        {
          y: [0.7, 99.3],
          "line.color": "blue"
        }
      ]
    },
    {
      name: "1200-1300",
      data: [
        {
          y: [0.3, 99.7],
          "line.color": "blue"
        }
      ]
    }
  ]
});


//Indigenous Graph 1 showing NAPLAN Results in Major Cities
Plotly.newPlot('myGraph1', {
  data: [{
  type: 'bar',
  x: [94.7, 82.3],
  y: ['Non-Indigenous', 'Indigenous'],
  marker:{
    color: ['#45A5DA', '#6000C6'],
  },
  orientation: 'h'
}], layout: {
  title: {
      text: "Percentage of Students at or Above Minimum Standards<br>for NAPLAN 2016 In Major Cities",
    },
  xaxis: {
    title: {
      text: "Percentage of Students",
    },
      range: [0,100],
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        showline: false,
        ticks: '',
    },
  yaxis: {
      autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        showline: false,
        ticks: '',
    },
  margin: {
  l: 110,
},
font: {
    color: "rgba(255,255,255,0.8)",
      family: "Aileron", 
      size: 15,
    },
    }
} );


function animateScroll1() {
  console.log(document.body.scrollTop);
  if (document.section.scrollTop > 3 || document.documentElement.scrollTop > 3 ) {
    
    Plotly.animate('myGraph1', {
    data: [{x: [94.7, 82.3]}],
    traces: [0],
  }, {
    transition: {
      duration: 500,
      easing: 'cubic-in-out'
    },
    frame: {
      duration: 500
    }
  })
  } else {
  }
};
//Indigenous Graph 2 showing NAPLAN Results in Remote Regions
Plotly.newPlot('myGraph2', {
  data: [{
  type: 'bar',
  x: [90.6, 37],
  y: ['Non-Indigenous', 'Indigenous'],
  marker:{
    color: ['#45A5DA', '#6000C6'],
  },
  orientation: 'h'
}], layout: {
  title: {
      text: "Percentage of Students at or Above Minimum Standards<br>for NAPLAN 2016 In Remote Areas",
    },
  margin: {
  l: 110,
},
  font: {
    color: "rgba(255,255,255,0.8)",
      family: "Aileron", 
      size: 15,
    },
  
    xaxis: {
      title: {
      text: "Percentage of Students",
    },
      range: [0,100],
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        showline: false,
        ticks: '',
    },
    yaxis: {
      autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        showline: false,
        ticks: '',
    }}
} );

function animateScroll2() {
  if (document.section.scrollTop > 3 || document.documentElement.scrollTop > 3) {
    Plotly.animate('myGraph2', {
    data: [{x: [90.6, 37]}],
    traces: [0],
  }, {
    transition: {
      duration: 500,
      easing: 'cubic-in-out'
    },
    frame: {
      duration: 500
    }
  })
  } else {
  }
};








Plotly.newPlot('graph5', {
  data: [{
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.17, 0.41, 0.6, 9.29, 49.31, 33.97, 6.19, 0.06],
    name: 'Indigenous',
    line: {
      color: '#45A5DA',
      simplify: false,
      shape: 'spline',
    }
  }, {
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.01, 0, 0.01, 1.3, 21.91, 47.99, 27.95, 0.83],
    name: 'Non-Indigenous',
    line: {
      color: '#6000C6',
      simplify: false,
      shape: 'spline',
    }
  }],
  layout: {
    title: {
      text: "Average Indigenous vs Non-Indigenous ICSEA scores based on Region",
    },
    legend: {
      bgcolor: "#0A0B19",
    },
    xaxis: {
      title: {
      text: "ICSEA Scores",
    },
       autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        showline: false,
        ticks: '',
    },
    yaxis: {
      title: {
      text: "Percentage of Students",
    },
      range: [0,70],
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        showline: false,
        ticks: '',
    },
    font: {
          family: "Aileron", 
          size: 15,
          color: "white",
        },
    sliders: [{
      pad: { t: 60, },
        bgcolor: "12142C",
        bordercolor: "10142C",
        borderwidth: 4,
      
        activebgcolor: "#dbdde0",
        ticklen: 1,
    
      x: 0.05,
      font: {
          family: "Aileron", 
          size: 12,
          color: "white",
        },
      len: 0.95,
      currentvalue: {
        xanchor: "right",
        prefix: 'Region: ',
        font: {
          family: "Aileron", 
          size: 20,
          color: "white",
        },
        },
    
      transition: {duration: 500},
      // By default, animate commands are bound to the most recently animated frame:
      steps: [{
        label: 'Major Cities',
        method: 'animate',
        args: [['Major Cities'], {
          mode: 'immediate',
          frame: {redraw: false, duration: 500},
          transition: {duration: 500}
        }]
      }, {
        label: 'Inner Regional',
        method: 'animate',
        args: [['Inner Regional'], {
          mode: 'immediate',
          frame: {redraw: false, duration: 500},
          transition: {duration: 500}
        }]
      }, {
        label: 'Outer Regional',
        method: 'animate',
        args: [['Outer Regional'], {
          mode: 'immediate',
          frame: {redraw: false, duration: 500},
          transition: {duration: 500}
        }]
      },{
        label: 'Remote',
        method: 'animate',
        args: [['Remote'], {
          mode: 'immediate',
          frame: {redraw: false, duration: 500},
          transition: {duration: 500}
        }]
      },{
        label: 'Very Remote',
        method: 'animate',
        args: [['Very Remote'], {
          mode: 'immediate',
          frame: {redraw: false, duration: 500},
          transition: {duration: 500}
        }]
      }]
    }],
    updatemenus: [{
      type: 'buttons',
      showactive: false,
      x: 0.05,
      y: 0,
      xanchor: 'right',
      yanchor: 'top',
      pad: {t: 60, r: 20},
      buttons: [{
        label: 'Play',
        method: 'animate',
        args: [null, {
          fromcurrent: true,
          frame: {redraw: false, duration: 1000},
          transition: {duration: 500}
        }]
      }]
    }]
  },
  // The slider itself does not contain any notion of timing, so animating a slider
  // must be accomplished through a sequence of frames. Here we'll change the color
  // and the data of a single trace:
  frames: [{
    name: 'Major Cities',
    data: [{
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.17, 0.41, 0.6, 9.29, 49.31, 33.97, 6.19, 0.06],
    line: {
      color: '#45A5DA',
      simplify: false,
    }
  }, {
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.01, 0, 0.01, 1.3, 21.91, 47.99, 27.95, 0.83],
    line: {
      color: '#6000C6',
      simplify: false,
    }
  }]
  }, {
    name: 'Inner Regional',
    data: [{
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.41, 0.34, 2.85, 18.13, 59.85, 17.80, 0.62, 0.0],
    line: {
      color: '#45A5DA',
      simplify: false,
      name: 'Lines',
    }
  }, {
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.03, 0.01, 0.19, 4.32, 48.21, 42.95, 4.28, 0],
    line: {
      color: '#6000C6',
      simplify: false,
      name: 'Lines',
    }
  }]
  }, {
    name: 'Outer Regional',
    data: [{
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.08, 2.78, 5.99, 29.28, 50.30, 11.34, 0.23, 0],
    line: {
      color: '#45A5DA',
      simplify: false,
    }
  }, {
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.00, 0.02, 0.57, 10.20, 57.08, 30.88, 1.24, 0],
    line: {
      color: '#6000C6',
      simplify: false,
    }
  }]
  }, {
    name: 'Remote',
    data: [{
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [9.08, 11.57, 15.60, 27.02, 30.69, 6.04, 0, 0],
    line: {
      color: '#45A5DA',
      simplify: false,
    }
  }, {
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.14, 0.28, 2.20, 13.14, 53.75, 30.48, 0, 0],
    line: {
      color: '#6000C6',
      simplify: false,
    }
  }]
  },{
    name: 'Very Remote',
    data: [{
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [11.88, 39.23, 29.53, 9.91, 8.88, 0.57, 0, 0],
    line: {
      color: '#45A5DA',
      simplify: false,
    }
  }, {
    x: [500, 600, 700, 800, 900, 1000, 1100, 1200],
    y: [0.46, 1.81, 6.32, 15.94, 54.15, 20.79, 0.53, 0],
    line: {
      color: '#6000C6',
      simplify: false,
    }
  }]
  }]
});