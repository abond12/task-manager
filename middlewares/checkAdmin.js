export default async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(404).sent({ message: 'User not found' });
        }

        if (req.user.role !== 'admin') {
            return res
                .status(500)
                .json({ message: `Access denied` });
        }
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
