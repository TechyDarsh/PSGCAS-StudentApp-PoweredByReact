import React, { useState } from 'react';
import { StatusBar, View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, Modal, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [studentInfoVisible, setStudentInfoVisible] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState('PSG CAS'); // Default selection

  const handleLogin = () => {
    if (rollNumber === 'admin' && password === 'admin') {
      setAuthenticated(true);
    } else {
      setPassword('');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };
  
  const openStudentInfo = () => {
    setStudentInfoVisible(true);
  };

  const closeStudentInfo = () => {
    setStudentInfoVisible(false);
  };

  if (!authenticated) {
    return (
      <View style={styles.icontainer}>
        <Image source={require('./assets/institution_logo.png')} style={styles.institutionLogo} />
         <Text style={styles.title}>  LOGIN</Text>
        <Text style={styles.institution}>     INSTITUTION NAME</Text>
        <Picker
          selectedValue={selectedCampus}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCampus(itemValue)
          }>
          <Picker.Item label="PSG CAS" value="PSG CAS" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Enter Roll Number"
          value={rollNumber}
          onChangeText={text => setRollNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <View style={styles.menuBar}>
      <TouchableOpacity style={styles.menuBarButton} onPress={openMenu}>
        <Text style={styles.menuBarButtonText}>☰</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuIcon} onPress={openStudentInfo}>
        <Image source={require('./assets/student_icon.png')} style={styles.menuIconImage} />
      </TouchableOpacity>
      <Text style={styles.appName}>      Dashboard</Text>
    </View>
    <Modal visible={menuVisible} animationType="slide">
      <View style={styles.menuContainer}>
        <Text style={styles.menuItem}>App Version: 1.0.0</Text>
        <Text style={styles.menuItem}>Developer: Sri Darshan C S </Text>
        <Text style={styles.menuItem}>PSG College of Arts and Science</Text>
        <TouchableOpacity style={styles.closeButton} onPress={closeMenu}>
          <Text style={styles.ibuttonText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.ibuttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Modal>
    <Modal visible={studentInfoVisible} animationType="slide">
<View style={styles.studentInfoContainer}>
<Image source={require('./assets/student_img.jpg')} style={styles.studentPhoto} />
  <Text style={styles.studentName}>Sri Darshan C S</Text>
  <Text style={styles.detailText}>Register Number: 23MSS051</Text>
  <Text style={styles.detailText}>Department: MSc Software Systems</Text>
  <View style={styles.buttonsContainer}>
    {/* Placeholder buttons */}
    <TouchableOpacity style={styles.infobutton} onPress={() => console.log('Projects pressed')}>
      <Text style={styles.buttoninfoText}>Projects</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.infobutton} onPress={() => console.log('Backlogs pressed')}>
      <Text style={styles.buttoninfoText}>Backlogs</Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity style={styles.closeButton} onPress={closeStudentInfo}>
    <Text style={styles.ibuttonText}>Close</Text>
  </TouchableOpacity>
</View>
</Modal>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Timetable pressed')}>
        <Image source={require('./assets/timetable_icon.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Time Table</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Attendance pressed')}>
        <Image source={require('./assets/attendance_icon.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Attendance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('CA Marks pressed')}>
        <Image source={require('./assets/marks_icon.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>CA Marks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('ExamSeating Pressed')}>
        <Image source={require('./assets/seating_icon.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Seating</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Elective pressed')}>
        <Image source={require('./assets/elective_icon.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Elective Enrollment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Feedback pressed')}>
        <Image source={require('./assets/feedback_icon.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Feedback</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Exam pressed')}>
        <Image source={require('./assets/results_icon.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Exam Results</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Fees pressed')}>
        <Image source={require('./assets/fees_icon.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Fees</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Courses pressed')}>
        <Image source={require('./assets/course_icon.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  institutionLogo: {
    width: 300, 
    height: 300, 
    resizeMode: 'contain',
    marginTop:80, 
  },
  dropdown: {
    height: 50,
    width: '80%',
    marginBottom: 110,
    borderWidth: 1,
    borderColor: '#0000',
    borderRadius: 5,
    marginTop:-50,
  },
  institution:{
    fontSize: 12,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom:-15,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5, 
  },
  icontainer:
  {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 0,
    marginTop:-170,
    marginBottom:200,
  },
    

  menuBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuBarButton: {
    borderRadius: 5,
    padding: 5,
  },
  menuBarButtonText: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:-100,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    width: '45%',
    height: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  logoutButton: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:20,

  },
  buttonStack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100', 
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 20,
    borderRadius: 10,
  },
  menuItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#0000FF',
    width: '100%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  studentInfoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  studentName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  menuIconImage: {
    width: 40,
    height: 40,
  },
  loginButton: {
    backgroundColor: 'blue',
    width: '40%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infobutton: {
    backgroundColor: '#0000FF',
    width: '40%', 
    height: 40, 
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttoninfoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },  
  studentPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },  
  buttonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain', 
  },
  ibuttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontWeight: 'bold',
    textAlign: 'center'
  }
  
});
