package fr.sedona.liferay;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

/**
 *
 */
@Component(
    immediate = true,
    property = {
        "com.liferay.portlet.display-category=Symposium",
        "com.liferay.portlet.instanceable=true",
        "javax.portlet.display-name=My Angular portlet",
        "javax.portlet.init-param.template-path=/",
        "javax.portlet.init-param.view-template=/view.jsp",
        "javax.portlet.resource-bundle=content.Language",
        "javax.portlet.security-role-ref=power-user,user"
    },
    service = Portlet.class
)
public class MyAngularPortlet extends MVCPortlet {
}
