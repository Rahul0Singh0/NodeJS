export const validate = (schema) => {
    // It returns a validating middleware
    return async function middleware(req, res, next) {
        try {
            console.log(req.body);
            console.log(req.file);
            schema.parse(req.body);
            next();
        } catch(error) {
            return res.status(400).json({ 
                error: error.errors,
                success: false,
                message: "Validation failed" 
            });
        }
    }
}