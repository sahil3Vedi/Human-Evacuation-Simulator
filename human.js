function human()
{
  this.size=6
  this.x=random(this.size, width-this.size);
  this.y=random(this.size, height-this.size);
  this.speed=2;
  this.direction_x=0;
  this.direction_y=0;

  this.Dest_x=0;
  this.Dest_y=Exit_y+Exit_h*0.5;

  this.show=function()
  {
    fill(255);
    ellipse(this.x,this.y,this.size*2,this.size*2);
  }

  this.update=function()
  {
    this.direction_x=this.Dest_x-this.x;
    this.direction_y=this.Dest_y-this.y;

    this.x=this.x+(this.direction_x)*(this.speed/dist(this.x,this.y,this.Dest_x,this.Dest_y));
    this.y=this.y+(this.direction_y)*(this.speed/dist(this.x,this.y,this.Dest_x,this.Dest_y));

    if (!(dist(this.x,this.y,this.Dest_x,this.Dest_y)<=Exit_size))
    {
      this.x=constrain(this.x, 0+this.size,width-this.size);
      this.y=constrain(this.y, 0+this.size,height-this.size);
    }

    if (dist(this.x,this.y,this.Dest_x,this.Dest_y)<=5)
    {
      this.x=-1000;
      this.y=-1000;
      this.size=1;
      this.speed=0;
      count_Exit+=1;
    }
  }

  this.run=function()
  {
    this.show();
    this.update();
  }


  this.collide=function(human)
  {
    if (dist(this.x,this.y,human.x, human.y)<=this.size*2)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  this.heaven=function()
  {
    if((this.x=this.Dest_x)&&(this.y=this.Dest_y))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  this.distance=function(L)
  {
    if(L.a==-1)
    {
      return sqrt((this.y-L.b)*(this.y-L.b));
    }
    else
    {
      return sqrt((this.x-L.a)*(this.x-L.a));
    }
  }

  this.inRange=function(obstacle)
  {
    if((this.x)>(obstacle.v1.x-this.size)&&(this.x<obstacle.v2.x+this.size))
    {
      return  true;
    }
    else if((this.y)>(obstacle.v1.y-this.size)&&(this.x<obstacle.v3.x+this.size))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  this.collideobs=function(obstacle)
  {
    if(this.inRange(obstacle))
    {
      for(var i=0;i<4;i++)
      {
        if(this.distance(obstacle.lines[i])<this.size)
        {
          L=obstacle.lines[i];
          if (L.a==-1)
          {
            this.x=2*this.x-L.b;
          }
          else
          {
            this.x=2*this.x-L.a;
          }
          return true;
        }
        else
        {
          return false;
        }
      }
    }
    else
    {
      return false;
    }
  }







}
