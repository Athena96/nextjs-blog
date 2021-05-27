

export default (req, res) => {
    console.log("the request...");
    console.log("this is all ran on the server (in a lambda)");

    console.log(req);
    res.status(200).json({ text: 'Hello' });
}