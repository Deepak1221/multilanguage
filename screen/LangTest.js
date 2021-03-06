import React, { Component } from 'react';
import { Button, LayoutAnimation, Text, UIManager, View } from 'react-native';

export default class LangTest extends Component {
  state = { rtl: false };
  
  componentWillMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  
  render() {
    const rtlText = this.state.rtl && { textAlign: 'right', writingDirection: 'rtl' };
    const rtlView = this.state.rtl && { flexDirection: 'row-reverse' };
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 40 }}>
        <Text style={[{ color: '#444', fontSize: 36, marginBottom: 40 ,textAlign: 'left' }, rtlText]}>
          {this.state.rtl ? 'أهلاً بالعالم!' : 'Hello World!'}
        </Text>
        
        <View style={[{ flexDirection: 'row', marginBottom: 40 }, rtlView]}>
          <View style={{ height: 40, width: 40, backgroundColor: '#db4437' }} />
          <View style={{ height: 40, width: 40, backgroundColor: '#0f9d58' }} />
          <View style={{ height: 40, width: 40, backgroundColor: '#4285f4' }} />
        </View>
        
        <Button
          color="#444"
          onPress={() => this.setState({ rtl: !this.state.rtl })}
          title={this.state.rtl ? 'English' : 'العربية'}
        />
      </View>
    );
  }
}