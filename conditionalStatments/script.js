let age = 17

let knowDriving = true

if (age > 17 && knowDriving){

    console.log(`Can be issued with driving lisence since he knows driving and of leagal age.`)
}
else if(age > 17 && !knowDriving){
    console.log(`He get the lisence after he learns driving`)
}
else if(age <= 17 && knowDriving){
    console.log(`He get the lisence after reaching legal age`)
}
else{
    console.log(`He can't get a driving lisence.`)
}