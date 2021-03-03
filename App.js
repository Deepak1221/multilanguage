import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View,Image,Button ,I18nManager} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import LangTest from './screen/LangTest' 


i18n.translations = {
  en: require('./src/translations/en.json'),
  ar: require('./src/translations/ar.json'),
};
// Set the locale once at the beginning of your app.
i18n.locale ='en' //Localization.locale;
i18n.defaultLocale = Localization.locale
 


// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;
const App = props =>{
  const [isRtl, setIsRtl] = useState(false);
  // const rtlView = isRtl && { flexDirection: 'row-reverse' };
  // const rtlText = isRtl && { textAlign: 'right', writingDirection: 'rtl' };
   
  // console.log("1: "+isRtl)
   

  return (
  //   <LangTest/>)
  // }
    <View style={styles.container} >
      {console.log("40: "+isRtl)}
      <View style={(false? styles.horicontainerRtl : styles.horicontainer)} >
        {/* <Text>hiii  deepak</Text> */}
       <Image
       source={require('./assets/favicon.png')} 
       />
      <Text>  {i18n.t('FORRENT')}  </Text>
      </View>
     
      {/* <StatusBar style="auto" /> */}
      <Button
      title= {isRtl? 'English' : 'العربية'}
      onPress= { () =>{   
    
       setIsRtl(prevoius => !prevoius )
        //alert('hii '+isRtl,)
    
        if(!isRtl){
          i18n.locale ='en'
          I18nManager.locale ='en'
          I18nManager.forceRTL(false)
        }else{
          i18n.locale ='ar'
          I18nManager.locale ='ar'
          I18nManager.forceRTL(true)
        }

        console.log(I18nManager.isRTL)
      } 
      } 

      />
    </View>)
  //   <LangTest/>
  // )
    }


{/* <View style={{ flex: 1, justifyContent: 'center', padding: 40 }}>
        <Text style={[{ color: '#444', fontSize: 36, marginBottom: 40 }, rtlText]}>
          {isRtl ? 'أهلاً بالعالم!' : 'Hello World!'}
        </Text>
        
        <View style={[{ flexDirection: 'row', marginBottom: 40 }, rtlView]}>
          <View style={{ height: 40, width: 40, backgroundColor: '#db4437' }} />
          <View style={{ height: 40, width: 40, backgroundColor: '#0f9d58' }} />
          <View style={{ height: 40, width: 40, backgroundColor: '#4285f4' }} />
        </View>
        
        <Button
          color="#444"
          onPress={() => setIsRtl(prev=> !prev)}
          title={isRtl? 'English' : 'العربية'}
        />
      </View> */}


//   );
// }

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fff',
 
  },

  horicontainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row'
 
  },
  horicontainerRtl: {
    flex: 1,   
    backgroundColor: '#fff',
    flexDirection: 'row-reverse'
 
  },
});
export default   App 
