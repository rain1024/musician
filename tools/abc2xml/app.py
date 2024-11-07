import gradio as gr
import subprocess

# Define a function to run the command and capture the output
def convert_abc_to_xml(input_text):
    with open("input.abc", "w") as f:
        f.write(input_text)

    # Run the command and capture the output
    result = subprocess.run(
        ["python", "abc2xml.py", "input.abc"],
        capture_output=True,
        text=True
    )

    if result.returncode == 0:
        return result.stdout
    else:
        return f"Error: {result.stderr}"

# Create a Gradio interface with columns
with gr.Blocks() as app:
    gr.Markdown("# ABC to MusicXML Converter")
    
    with gr.Row():
        with gr.Column():
            input_text = gr.Textbox(label="ABC Notation Input", lines=10)
            convert_button = gr.Button("Convert")
        with gr.Column():
            output_text = gr.Textbox(label="MusicXML Output", lines=10)
            copy_button = gr.Button("Copy to Clipboard", elem_id="copy_button")  # Set id for the button

    # Link the convert button to the function
    convert_button.click(fn=convert_abc_to_xml, inputs=input_text, outputs=output_text)

    # JavaScript for copying to clipboard and changing button text
    copy_button.click(
        fn=None,
        inputs=[output_text],
        outputs=[],
        js="""
        (output_text) => {
            navigator.clipboard.writeText(output_text).then(() => {
                const copyButton = document.getElementById('copy_button');
                if (copyButton) {
                    copyButton.innerText = 'Text Copied!';
                    setTimeout(() => {
                        copyButton.innerText = 'Copy to Clipboard';
                    }, 2000);
                }
            });
        }
        """
    )

# Launch the app
app.launch()