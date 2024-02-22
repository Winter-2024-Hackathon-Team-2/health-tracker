import smiley from "../images/smiley.png";
import frowny from "../images/frowny.png";
import meh from "../images/meh.png";

export default function getMoodEmoji(stressLevel){
    let low = 3;
    let mid = 7;

    if (stressLevel <= low){
        return smiley
    } else if (stressLevel > low && stressLevel < mid){
        return meh
    } else {
        return frowny
    }
}