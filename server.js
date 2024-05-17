const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());


//Establish the database connection

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "avni343536",
    database: "licence_management"

});

db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB"+ JSON.stringify(error,undefined,2));
    } else {
      console.log("successfully Connected to DB");
    }
  });
  module.exports=db;


// //Establish the Port

//   server.listen(8085,function check(error) {
//     if (error) 
//     {
//     console.log("Error....dddd!!!!");
//     }

//     else 
//     {
//         console.log("Started....!!!! 8085");

//     }
// });
// POST endpoint to handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;

    // Insert personal information into the PersonalInformation table
    const personalInfoQuery = 'INSERT INTO PersonalInformation SET ?';
    connection.query(personalInfoQuery, formData.personalInfo, (err, results) => {
        if (err) {
            console.error('Error inserting personal information:', err);
            res.status(500).send('Error inserting personal information');
            return;
        }

        // Insert permanent address into the PermanentAddress table
        const permAddressQuery = 'INSERT INTO PermanentAddress SET ?';
        connection.query(permAddressQuery, formData.personalInfo.permanentAddress, (err, results) => {
            if (err) {
                console.error('Error inserting permanent address:', err);
                res.status(500).send('Error inserting permanent address');
                return;
            }

            // Insert driving license information into the DrivingLicenseInformation table
            const licenseInfo = {
                NationalIdentificationNumber: formData.personalInfo.NationalIdentificationNumber,
                New_User: formData.licenceHeld === 'Yes' ? 'YES' : 'NO', // Assuming licenseHeld is a yes/no flag
                LicenceDetails: formData.applicationType
            };
            const licenseInfoQuery = 'INSERT INTO DrivingLicenseInformation SET ?';
            connection.query(licenseInfoQuery, licenseInfo, (err, results) => {
                if (err) {
                    console.error('Error inserting license information:', err);
                    res.status(500).send('Error inserting license information');
                    return;
                }

                // Send success response
                res.status(200).send('Form submitted successfully');
            });
        });
    });
});

// //Create the Records

// server.post("/api/student/add", (req, res) => {
//     let details = {
//       stname: req.body.stname,
//       course: req.body.course,
//       fee: req.body.fee,
//     };
//     let sql = "INSERT INTO student SET ?";
//     db.query(sql, details, (error) => {
//       if (error) {
//         res.send({ status: false, message: "Student created Failed" });
//       } else {
//         res.send({ status: true, message: "Student created successfully" });
//       }
//     });
//   });



// //view the Records

// server.get("/api/student", (req, res) => {
//     var sql = "SELECT * FROM student";
//     db.query(sql, function (error, result) {
//       if (error) {
//         console.log("Error Connecting to DB");
//       } else {
//         res.send({ status: true, data: result });
//       }
//     });
//   });


// //Search the Records

// server.get("/api/student/:id", (req, res) => {
//     var studentid = req.params.id;
//     var sql = "SELECT * FROM student WHERE id=" + studentid;
//     db.query(sql, function (error, result) {
//       if (error) {
//         console.log("Error Connecting to DB");
//       } else {
//         res.send({ status: true, data: result });
//       }
//     });
//   });



// //Update the Records

// server.put("/api/student/update/:id", (req, res) => {
//     let sql =
//       "UPDATE student SET stname='" +
//       req.body.stname +
//       "', course='" +
//       req.body.course +
//       "',fee='" +
//       req.body.fee +
//       "'  WHERE id=" +
//       req.params.id;
  
//     let a = db.query(sql, (error, result) => {
//       if (error) {
//         res.send({ status: false, message: "Student Updated Failed" });
//       } else {
//         res.send({ status: true, message: "Student Updated successfully" });
//       }
//     });
//   });



//   //Delete the Records

//   server.delete("/api/student/delete/:id", (req, res) => {
//     let sql = "DELETE FROM student WHERE id=" + req.params.id + "";
//     let query = db.query(sql, (error) => {
//       if (error) {
//         res.send({ status: false, message: "Student Deleted Failed" });
//       } else {
//         res.send({ status: true, message: "Student Deleted successfully" });
//       }
//     });
//   });