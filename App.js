import React from "react"; 
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView} 
	from "react-native"; 
import { actions, RichEditor, RichToolbar } 
	from "react-native-pell-rich-editor"; 

// Custom component for heading1 action 
const handleHead = ({ tintColor }) => ( 
	<Text style={{ color: tintColor }}>H1</Text> 
); 

const App = () => { 

	// Create a reference to the 
	// RichEditor component 
	const richText = React.useRef(); 
	return ( 
		<SafeAreaView> 
			<ScrollView> 

				{/* KeyboardAvoidingView to 
					handle keyboard behavior */} 
				<KeyboardAvoidingView 
					behavior={ 
						Platform.OS ==="ios"? "padding": "height"} 
					style={{ flex: 1 }}> 

					{/* Text component for 
						the app title */} 
					<Text style={{ color: "green", 
								fontSize: 30, 
								marginTop: 50, 
								backgroundColor:"lightgrey", 
								borderRadius: 10, 
								textAlign: "center",}}> 
					 Text Editor App
					</Text> 

					{/* RichToolbar component 
					for text formatting actions */} 
					<RichToolbar style={{ marginTop: 10}} 
								editor={richText} 

						// Connect the RichToolbar 
						// to the RichEditor 
						actions={[ actions.setBold, 
								actions.insertBulletsList, 
								actions.insertOrderedList, 
								actions.insertLink, 
								actions.setStrikethrough, 
								actions.setItalic, 
								actions.setUnderline, 
								actions.heading1,]} 

						// Define available text 
						// formatting actions 
						iconMap={{[actions.heading1]:handleHead,}} /> 

					{/* Text component for 
						description */} 
					<Text style={{ fontFamily: "monospace", 
								fontWeight: 900, 
								fontSize: 15, 
								padding: 10}}> 
						Description: 
					</Text> 

					{/* RichEditor component 
						for text editing */} 
					<RichEditor ref={richText} 
								onChange={(descriptionText) => { 

							// Handle the change in 
							// the editor's content 
							console.log("descriptionText:",descriptionText);}} /> 
				</KeyboardAvoidingView> 
			</ScrollView> 
		</SafeAreaView> 
	); 
}; 
export default App;
