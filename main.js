var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36669/father-son-family-clipart-xl.png", "https://i.pinimg.com/550x/79/b8/94/79b894c9364b20a7416e561bef15d9a2.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://us.123rf.com/450wm/yusufdemirci/yusufdemirci2010/yusufdemirci201000245/158008654-funny-little-school-kid-character.jpg?ver=6"];
var names = ["Fmaily Book","Yogesh Sawant", "Rupali Sawant", "Harsh Sawant", "Ajun Sawant"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}