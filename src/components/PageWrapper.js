// import { useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const PageWrapper = ({ children }) => {
//   const location = useLocation();
//   const [bgColor, setBgColor] = useState(
//     getComputedStyle(document.body).backgroundColor
//   );

//   useEffect(() => {
//     // Обновляем текущий цвет фона при каждом рендере страницы
//     const currentBg = getComputedStyle(document.body).backgroundColor;
//     setBgColor(currentBg);
//   }, [location.pathname]);

//   return (
//     <div style={{ position: "relative", overflow: "hidden" }}>
//       {/* Заливка фоном, которая плавно исчезает */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={location.pathname + "-bg"}
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 0 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4 }}
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundColor: bgColor,
//             zIndex: 10,
//             pointerEvents: "none",
//           }}
//         />
//       </AnimatePresence>

//       {/* Основной контент */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={location.pathname}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.4 }}
//         >
//           {children}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default PageWrapper;
