import React, {Component} from 'react';
import FileSaver from "file-saver";
import '../../App.css'

class DownloadZip extends Component {
    state = {
    };


    componentWillMount() {

    }

    componentDidMount() {
    }


    downloadZip = () => {
        // neparasius pilno adreso su localhostu programa atsiuncia nesamone.
        //speju cia kazkas susije su security,
        fetch("http://localhost:8181/api/files/zip")
            .then(response => {
                console.log(response)
                console.log(response.url)
                // const fileNameHeader = "x-suggested-filename";
                // const suggestedFileName = response.headers[fileNameHeader];
                // const effectiveFileName = (suggestedFileName === undefined
                //     ? "document.zip"
                //     : "duomenys.zip");
                // console.log("Received header [" + fileNameHeader + "]: " + suggestedFileName
                //     + ", effective fileName: " + effectiveFileName);
                // Let the user save the file.

                // const suggestedFileName = "duomenys.zip";

                // var blob = new Blob([response.url], {type: "zip"});
                //  FileSaver.saveAs("http://localhost:8181/api/files/zip", "suggestedFileName");
                 FileSaver.saveAs(response.url, "suggestedFileName");
                // FileSaver.saveAs(response.url, "suggestedFileName");
              


            }).catch((response) => {
            console.error("Could not Download zip file from the server.", response);
        });
    }

    render() {
        return (
        <React.Fragment>
        < button className="btn button1"
        onClick={this.downloadZip}>Zippo
        </button>
        </React.Fragment>
        );
    }
}

export default DownloadZip;