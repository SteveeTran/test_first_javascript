console.log(translate('quiet'));
function translate(str){
    var counter = 1;
    var cHolder = '';
    var sHolder = '';
    var start = false;
    for(var i = 0; i < str.length; i++){
        switch(str[i]){
            case 'a':
                if(start){
                    str = sHolder;
                    str += cHolder;
                    str += 'ay';
                    return str;
                }
                else{
                    str += 'ay';
                    return str;
                }
            case 'b':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'c':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'e':
                if(start){
                    str = sHolder;
                    str += cHolder;
                    str += 'ay';
                    return str;
                }
                else{
                    str += 'ay';
                    return str;
                }
                break;
            case 'd':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'f':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'g':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'h':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'i':
                if(start){
                    str = sHolder;
                    str += cHolder;
                    str += 'ay';
                    return str;
                }
                else{
                    str += 'ay';
                    return str;
                }
            case 'j':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'k':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'l':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'm':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'n':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'o':
                if(start){
                    str = sHolder;
                    str += cHolder;
                    str += 'ay';
                    return str;
                }
                else{
                    str += 'ay';
                    return str;
                }
            case 'p':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'q':
                if(str[i + 1] == 'u'){
                    cHolder += str[i];
                    cHolder += str[i + 1];
                    sHolder = str.substring(counter + 1);
                    start = true;
                    counter++;
                    break;
                }
                else{
                    cHolder += str[i];
                    sHolder = str.substr(counter);
                    start = true;
                    counter++;
                    break;
                }
            case 'r':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 's':
                cHolder += str[i];
                sHolder = str.substr(counter);
                counter++;
                break;
            case 't':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'u':
                if(start){
                    str = sHolder;
                    str += cHolder;
                    str += 'ay';
                    return str;
                }
                else{
                    str += 'ay';
                    return str;
                }
            case 'v':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'x':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            case 'z':
                cHolder += str[i];
                sHolder = str.substr(counter);
                start = true;
                counter++;
                break;
            default:
                break;
        }
    }
    str = sHolder;
    str += cHolder;
    str += 'ay';
    return str;
}