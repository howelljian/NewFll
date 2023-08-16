

Webcam.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/l2GUstmJI/model.json',ModelLoaded);

function ModelLoaded()
{
    console.log('Model Loaded');
}

function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}


function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else

    {
        var synth = window.speechSynthesis;
        
        
        console.log(results)
        document.getElementById("result_item_name").innerHTML = results[0].label;
       
        
       
       
        if(results[0].label=="Cube")
        {
            var utterThis = new SpeechSynthesisUtterance("The Rubik's Cube is a 3-D combination puzzle originally invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik On the original classic Rubik's Cube, each of the six faces was covered by nine stickers, each of one of six solid colors white, red, blue, orange, green, and yellow Although the Rubik's Cube reached its height of mainstream popularity in the 1980s, it is still widely known and used Many speedcubers continue to practise it and similar puzzles, and compete for the fastest times in various categories Since 2003, the World Cube Association (WCA), the international governing body of the Rubik's Cube, has organised competitions worldwide and recognises world records The current fastest official time for the original 3 by 3 is 3 point 1 3 seconds by Max Park");
            synth.speak(utterThis);
        }
        
        if(results[0].label=="Fish")
        {
            var utterThis = new SpeechSynthesisUtterance("A fish is an aquatic, gill-bearing animal that lacks limbs. Most fish are ectothermic cold-blooded, allowing their body temperatures to vary as ambient temperatures change, though some of the large active swimmers like white shark and tuna can hold a higher core temperature. Fish are abundant in most bodies of water. They can be found in nearly all aquatic environments, from high mountain streams (e.g., char and gudgeon) to the abyssal and even hadal depths of the deepest oceans (e.g., cusk-eels and snailfish), although no species has yet been documented in the deepest 25% of the ocean. With 34,300 described species, fish exhibit greater species diversity than any other group of vertebrates.");
            synth.speak(utterThis);
        }

        if(results[0].label=="Car")
        {
            var utterThis = new SpeechSynthesisUtterance("A car, or an automobile is a motor vehicle with wheels. French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, while French-born-Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion powered automobile in 1808. The modern car—a practical, marketable automobile for everyday use—was invented in 1886, when German inventor Carl Benz patented his Benz Patent-Motorwagen. Commercial cars became widely available during the 20th century. One of the first cars affordable by the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced horse-drawn carriages. In Europe and other parts of the world, demand for automobiles did not increase until after World War II.[4] The car is considered an essential part of the developed economy.");
            synth.speak(utterThis);
        }

        if(results[0].label=="Planet")
        {
            var utterThis = new SpeechSynthesisUtterance("A planet is a large, rounded astronomical body that is neither a star nor its remnant. The best available theory of planet formation is the nebular hypothesis, which posits that an interstellar cloud collapses out of a nebula to create a young protostar orbited by a protoplanetary disk. Planets grow in this disk by the gradual accumulation of material driven by gravity, a process called accretion. The Solar System has at least eight planets: the terrestrial planets Mercury, Venus, Earth and Mars, and the giant planets Jupiter, Saturn, Uranus and Neptune. These planets each rotate around an axis tilted with respect to its orbital pole. All planets of the Solar System other than Mercury possess a considerable atmosphere, and some share such features as ice caps, seasons, volcanism, hurricanes, tectonics, and even hydrology. Apart from Venus and Mars, the Solar System planets generate magnetic fields, and all except Venus and Mercury have natural satellites. The giant planets bear planetary rings, the most prominent being those of Saturn.");
            synth.speak(utterThis);
        }

        

        

    


       
        
        
        
    }
}

function stop()

{
    var synth = window.speechSynthesis;
    synth.cancel();
}

   