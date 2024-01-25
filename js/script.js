// function test()
//     {
//       document.getElementById('stl').style.fontSize='35px';document.getElementById('stl').style.backgroundColor='red'
//     }
//     function test2()
//     {
//       document.getElementById('myimage').src=('image/Microsoft-Fluentui-Emoji-Mono-Light-Bulb.512.png');document.getElementById('link').href('http://google.com')
//     } 
//     function test3()
//     {
//       document.getElementById('myimage').src='image/Microsoft-Fluentui-Emoji-3d-Light-Bulb-3d.512.png'
//     }
//     function swap()
//     {
//       var temp=document.getElementById('element1').innerHTML
//      document.getElementById('element1').innerHTML=document.getElementById('element2').innerHTML
//      document.getElementById('element2').innerHTML=temp
//     }
    function hide()
    {
      if(document.getElementById('btn').innerHTML=='Hide')
      {
        document.getElementById('hallo').style.display='none'
        document.getElementById('btn').innerHTML='Show'
      }
      else   
      {
        document.getElementById('hallo').style.display='block'
        document.getElementById('btn').innerHTML='Hide'
      }
    } 

    function ramnum()
    {
      // document.getElementById('demo').innerHTML =Math.random()
      const fruits =["banana","orange","apple","mango"];
      document.getElementById('demo').innerHTML = fruits
      document.getElementById('demo').innerHTML = fruits.sort()
      document.getElementById('demo').innerHTML = fruits.reverse()
      document.getElementById('demo').innerHTML = fruits.join("*")


    }
    function imgwidth()   
{
  var percentage =document.getElementById('text').value
 document.getElementById('img').style.width = percentage +'%'
}

function imgheight(){
  var heightper =document.getElementById('text1').value

  document.getElementById('img').style.width = heightper +'px'
}
    
  