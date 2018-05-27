function Bar()
{
  this.uppercornY=0;
  this.scale=height/N;

  this.show=function()
  {
    fill(50,200,50);
    noStroke();
    rect(width-10,this.uppercornY,10,height-this.uppercornY);
  }

  this.resize=function()
  {
    this.uppercornY=this.scale*count_Exit;
  }
}
