function obstacle(x,y,w,h)
{
  this.v1=createVector(x,y);
  this.v2=createVector(x+w,y);
  this.v3=createVector(x+w,y+h);
  this.v4=createVector(x,y+h);

  this.vertices=[this.v1,this.v2,this.v3,this.v4]

  this.show=function()
  {
    fill(100);
    noStroke();
    rect(x,y,w,h);
  }

  this.lines=[]

  /*this.line=function(v1,v2)//line of form x-a=0 OR y-b=0
  {
    if(v1.x=v2.x)
    {
      this.a=v1.x;
      this.b=0;
    }
    else
    {
      this.b=v1.y;
      this.a=0;
    }
  }*/

  for(i=0;i<4;i++)
  {
    v1=this.vertices[i];
    v2=this.vertices[(i+1)%4];
    this.lines[i]=line(v1,v2);
  }
}
