var Exit_x=0;
var Exit_y=20;
var Exit_h=40;
var Exit_w=20;
var Exit_size=20;

var b;


count_Exit=0;

var humans=[];
var N=400;

function setup()
{
  createCanvas(1000,700);
  for(var i=0;i<N;i++)
  {
    humans[i]=new human();
  }
  b=new Bar();
}

function draw()
{
  background(51);
  for(var i=N-1;i>=0;i--)
  {
    humans[i].run();
    for(var j=0;j<N;j++)
    {
      if((humans[i].collide(humans[j]))&&(i!=j))
      {
        humans[i].x=((humans[i].x-humans[j].x)/10)+humans[i].x
        humans[i].y=((humans[i].y-humans[j].y)/10)+humans[i].y
      }
    }
  }

  b.show();
  b.resize();



  fill(200,50,50);
  noStroke();
  rect(Exit_x,Exit_y,Exit_w,Exit_h);
}
