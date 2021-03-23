exports.getWorld = function(req, res) {
    res.json({ result: 'Hello World...controller side'});
}

exports.getWorldParams = function(req, res) {
    res.json({message:'hello Johnny', data: [
        req.params.foo,
        req.params.bar

    ]});
};
    //res.write(users.join('\n'));
     

    exports.postWorld = function(req,res) {

    res.json({result: 'POST was sent', data: req.body});
    };