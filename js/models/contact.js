import resume from './resume'

export default $.extend(true, {}, {}, {
    model: [
        {icon: "location-arrow", detail: "Home", href:resume.model.basics.location.map},
        {icon: "phone", detail: "Phone", href:"tel:" + resume.model.basics.phone},
        {icon: "envelope", detail: "E-mail", href:"mailto:" + resume.model.basics.email},
        {icon: "link", detail: resume.model.basics.website.value, href:resume.model.basics.website.href}
    ]
});
