exports.test = (req, res) => {
	return res.status(200).json({
		message: 'api is working fine'
	});
};