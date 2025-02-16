import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const TnC = () => {
  return (
    <ScrollView style={{padding:23, backgroundColor:'white'}}>
      <Text style={{color:'#ff6600', fontSize:25, fontWeight:'bold', marginBottom:12, fontFamily:"NotoSerif-Italic"}}>Terms and Conditions</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:19}}>At Sportzon, we are committed to providing our customers with a safe and enjoyable experience. By using our facilities and services, you agree to the following terms and conditions:</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Acceptance of Terms:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>By accessing or using Sportzon, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the Terms, you may not access or use Sportzon.</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Eligibility:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>Sportzon is only available to users who are at least 14 years old and have the legal capacity to enter into binding contracts.</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Account Creation:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>To access certain features of Sportzon, you may need to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You are also responsible for all activities that occur under your account.</Text>
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>User Content:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>You may be able to submit content to Sportzon, such as comments, reviews, or photos. You retain all ownership rights to your User Content, but you grant Sportzon a non-exclusive, worldwide, royalty-free license to use, modify, publish, and distribute your User Content in connection with Sportzon. You are solely responsible for your User Content and represent that you have the necessary rights to submit such content.</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Prohibited Conduct:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>You agree not to use Sportzon for any purpose that is unlawful, harmful, or prohibited by these Terms. This includes, but is not limited to:
Uploading or transmitting content that is infringing, obscene, hateful, or threatening.
Harassing, bullying, or intimidating other users.
Impersonating any person or entity. Interfering with or disrupting the Sportzon platform.</Text>
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Disclaimer:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>Sportzon is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation or performance of Sportzon. We do not guarantee that Sportzon will be available at all times or that it will be free of errors or interruptions.</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Limitation of Liability:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:14,marginBottom:15}}>To the extent permitted by law, we shall not be liable for any damages arising out of or related to your use of Sportzon, including but not limited to, direct, indirect, incidental, consequential, or punitive damages.</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Termination:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>We may terminate your access to Sportzon at any time, for any reason, with or without notice.</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Governing Law:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>These Terms shall be governed by and construed in accordance with the laws of Delhi Jurisdiction, without regard to its conflict of law provisions.</Text>
   
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Entire Agreement:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>These Terms constitute the entire agreement between you and Sportzon regarding your use of the platform.</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Updates to Terms:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:15}}>We may update these Terms at any time. We will notify you of any changes by posting the revised Terms on Sportzon. Your continued use of Sportzon following the posting of revised Terms means that you accept and agree to the changes.</Text>
      
      <Text style={{color:'#063970', fontSize:20, fontWeight:'bold', marginBottom:5,}}>Contact Us:</Text>
      <Text style={{color: '#063970', textAlign:'justify', fontSize:12,marginBottom:70}}>If you have any questions about these Terms, please contact us at info@sportzon.in</Text>
   
    </ScrollView>
  )
}

export default TnC

const styles = StyleSheet.create({})