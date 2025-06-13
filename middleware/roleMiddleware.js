const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!allowedRoles.includes(req.user.type)) {
      return res.status(403).json({ 
        message: 'Access denied. Insufficient permissions.' 
      });
    }

    next();
  };
};

// Specific role checkers
const isAdmin = checkRole('admin');
const isAdminOrEditor = checkRole('admin', 'editor');
const isAdminOrEditorOrViewer = checkRole('admin', 'editor', 'viewer');

module.exports = {
  checkRole,
  isAdmin,
  isAdminOrEditor,
  isAdminOrEditorOrViewer
}; 