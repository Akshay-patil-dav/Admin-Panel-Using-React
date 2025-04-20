import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    PenTool,
    Users2,
    BarChart,
    GraduationCap,
    Calendar,
    Mic,
    HelpCircle,
    ChevronRight,
    ChevronDown,
    FileText,
    Video,
    MessageSquare
} from 'lucide-react';


export function Menu_buttion() {
    return (
        <button id='dashboard' className="eduler-side-nav__item "
            onClick={() => {toggleExpand('dashboard', '/')}}
        >
            <LayoutDashboard className="eduler-side-nav__item-icon" />
            <span className="eduler-side-nav__item-content text-black" >Home</span>

        </button>
    )
}


const SideNav = ({ isOpen }) => {
    const [expandedItems, setExpandedItems] = useState([]);
    const navigate = useNavigate();

    const toggleExpand = (itemId, link) => {
        setExpandedItems((prev) =>
            prev.includes(itemId)
                ? prev.filter((id) => id !== itemId)
                : [...prev, itemId]
        );
        if (link) {
            navigate(link);
        }
    };

    const navItems = [
        // {
        //     id: 'dashboard',
        //     icon: LayoutDashboard,
        //     label: 'Home',
        //     link: '/',
        // },
        {
            id: 'product',
            icon: BookOpen,
            label: 'Product',
            link: '/Product',
        },
        { id: 'ai-writer', icon: PenTool, label: 'AI Writer', link: '/ai-writer' },
        {
            id: 'ai-teachers',
            icon: Users2,
            label: 'AI Teachers',
        },
        { id: 'analytics', icon: BarChart, label: 'Analytics', link: '/analytics' },
        { id: 'courses', icon: GraduationCap, label: 'Courses', link: '/courses' },
        { id: 'events', icon: Calendar, label: 'Events', link: '/events' },
    ];

    const voiceTools = [

        { id: 'speech-to-text', icon: Mic, label: 'Speech to Text', link: '/voice-tools/speech-to-text' },
    ];

    return (
        <aside className={`eduler-side-nav ${isOpen ? 'eduler-side-nav--open' : ''}`}>
            <div className="eduler-side-nav__container">
                <div className="eduler-side-nav__content">





                    <nav className="eduler-side-nav__menu">

                        <div className="d-grid gap-3">

                            <Menu_buttion />
                            <h3 className="eduler-side-nav__section-title">
                                AI Voice Tools
                            </h3>

                        </div>

                        {navItems.map((item) => (
                            <div key={item.id}>


                                <button
                                    onClick={() => toggleExpand(item.id, item.link)}
                                    id={item.id}
                                    className="eduler-side-nav__item "
                                >
                                    <item.icon className="eduler-side-nav__item-icon" />
                                    <span className="eduler-side-nav__item-content text-black" >{item.label}</span>
                                    {item.subItems ? (
                                        <ChevronDown
                                            className={`eduler-side-nav__item-arrow ${expandedItems.includes(item.id) ? 'rotate-180' : ''
                                                }`}
                                        />
                                    ) : (
                                        <div className="eduler-side-nav__item-arrow" />
                                        // ChevronRight className="eduler-side-nav__item-arrow" />
                                    )}
                                </button>
                                {item.subItems && (
                                    <div
                                        className={`eduler-side-nav__subitems ${expandedItems.includes(item.id)
                                            ? 'eduler-side-nav__subitems--expanded'
                                            : ''
                                            }`}
                                    >
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.id}
                                                to={subItem.link}
                                                className="eduler-side-nav__subitem"
                                            >
                                                <subItem.icon className="eduler-side-nav__subitem-icon" />
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="eduler-side-nav__section">
                        <h3 className="eduler-side-nav__section-title">
                            AI Voice Tools
                        </h3>
                        <nav className="eduler-side-nav__menu">
                            {voiceTools.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    className="eduler-side-nav__item"
                                >
                                    <item.icon className="eduler-side-nav__item-icon" />
                                    <span className="eduler-side-nav__item-content">{item.label}</span>
                                    <ChevronRight className="eduler-side-nav__item-arrow" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="eduler-side-nav__footer">
                    <Link
                        to="/help"
                        className="eduler-side-nav__help"
                    >
                        <HelpCircle className="eduler-side-nav__help-icon" />
                        Help & Support
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default SideNav;
