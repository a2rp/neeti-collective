// AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ScrollToTop from "./components/scrollToTop";

/* Lazy pages */
const Home = lazy(() => import("./pages/home"));

/* Primary */
const Work = lazy(() => import("./pages/work"));
const WorkDetail = lazy(() => import("./pages/workDetail"));

const About = lazy(() => import("./pages/about"));

const Journal = lazy(() => import("./pages/journal"));
const JournalDetail = lazy(() => import("./pages/journalDetail"));

const Initiatives = lazy(() => import("./pages/initiatives"));
const InitiativeDetail = lazy(() => import("./pages/initiativeDetail"));

/* Footer / legal */
const Contact = lazy(() => import("./pages/contact"));
const Terms = lazy(() => import("./pages/terms"));
const Privacy = lazy(() => import("./pages/privacy"));
const SubmissionPolicy = lazy(() => import("./pages/submissionPolicy"));
const FraudAlerts = lazy(() => import("./pages/fraudAlerts"));
const Fellowships = lazy(() => import("./pages/fellowships"));

/* Optional: generic placeholder */
const ComingSoon = lazy(() => import("./pages/comingSoon"));

const PageLoader = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "220px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <ScrollToTop />

            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Navigate to="/" replace />} />

                {/* Work + sub pages */}
                <Route path="/work" element={<Work />} />
                <Route path="/work/:slug" element={<WorkDetail />} />

                {/* About */}
                <Route path="/about" element={<About />} />

                {/* Journal + sub pages */}
                <Route path="/journal" element={<Journal />} />
                <Route path="/journal/:slug" element={<JournalDetail />} />

                {/* Initiatives/Events + sub pages */}
                <Route path="/initiatives" element={<Initiatives />} />
                <Route
                    path="/initiatives/:slug"
                    element={<InitiativeDetail />}
                />

                {/* Footer pages */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route
                    path="/submission-policy"
                    element={<SubmissionPolicy />}
                />
                <Route path="/fraud-alerts" element={<FraudAlerts />} />
                <Route path="/fellowships" element={<Fellowships />} />

                {/* Optional aliases for "events" word */}
                <Route
                    path="/events"
                    element={<Navigate to="/initiatives" replace />}
                />
                <Route
                    path="/events/:slug"
                    element={<Navigate to="/initiatives/:slug" replace />}
                />

                {/* Optional placeholder route for quick testing */}
                <Route path="/coming-soon" element={<ComingSoon />} />

                {/* Catch all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
