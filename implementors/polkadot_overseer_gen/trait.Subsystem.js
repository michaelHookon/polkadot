(function() {var implementors = {};
implementors["malus"] = [{"text":"impl&lt;Context, Sub, Interceptor&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"malus/struct.InterceptedSubsystem.html\" title=\"struct malus::InterceptedSubsystem\">InterceptedSubsystem</a>&lt;Sub, Interceptor&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a> + <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Sub: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;<a class=\"struct\" href=\"malus/struct.InterceptedContext.html\" title=\"struct malus::InterceptedContext\">InterceptedContext</a>&lt;Context, Interceptor&gt;, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"malus/struct.InterceptedContext.html\" title=\"struct malus::InterceptedContext\">InterceptedContext</a>&lt;Context, Interceptor&gt;: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a> + <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Interceptor: <a class=\"trait\" href=\"malus/trait.MessageInterceptor.html\" title=\"trait malus::MessageInterceptor\">MessageInterceptor</a>&lt;&lt;Context as <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&gt;::<a class=\"type\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html#associatedtype.Sender\" title=\"type polkadot_overseer_gen::SubsystemContext::Sender\">Sender</a>, Message = &lt;Context as <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&gt;::<a class=\"type\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html#associatedtype.Message\" title=\"type polkadot_overseer_gen::SubsystemContext::Message\">Message</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Context as <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&gt;::<a class=\"type\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html#associatedtype.Sender\" title=\"type polkadot_overseer_gen::SubsystemContext::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemSender.html\" title=\"trait polkadot_overseer_gen::SubsystemSender\">SubsystemSender</a>&lt;&lt;Interceptor as <a class=\"trait\" href=\"malus/trait.MessageInterceptor.html\" title=\"trait malus::MessageInterceptor\">MessageInterceptor</a>&lt;&lt;Context as <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&gt;::<a class=\"type\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html#associatedtype.Sender\" title=\"type polkadot_overseer_gen::SubsystemContext::Sender\">Sender</a>&gt;&gt;::<a class=\"type\" href=\"malus/trait.MessageInterceptor.html#associatedtype.Message\" title=\"type malus::MessageInterceptor::Message\">Message</a>&gt;,&nbsp;</span>","synthetic":false,"types":["malus::InterceptedSubsystem"]}];
implementors["polkadot_approval_distribution"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_approval_distribution/struct.ApprovalDistribution.html\" title=\"struct polkadot_approval_distribution::ApprovalDistribution\">ApprovalDistribution</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.ApprovalDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::ApprovalDistributionMessage\">ApprovalDistributionMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.ApprovalDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::ApprovalDistributionMessage\">ApprovalDistributionMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_approval_distribution::ApprovalDistribution"]}];
implementors["polkadot_availability_bitfield_distribution"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_availability_bitfield_distribution/struct.BitfieldDistribution.html\" title=\"struct polkadot_availability_bitfield_distribution::BitfieldDistribution\">BitfieldDistribution</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.BitfieldDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::BitfieldDistributionMessage\">BitfieldDistributionMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.BitfieldDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::BitfieldDistributionMessage\">BitfieldDistributionMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_availability_bitfield_distribution::BitfieldDistribution"]}];
implementors["polkadot_availability_distribution"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_availability_distribution/struct.AvailabilityDistributionSubsystem.html\" title=\"struct polkadot_availability_distribution::AvailabilityDistributionSubsystem\">AvailabilityDistributionSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.AvailabilityDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::AvailabilityDistributionMessage\">AvailabilityDistributionMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.AvailabilityDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::AvailabilityDistributionMessage\">AvailabilityDistributionMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_availability_distribution::AvailabilityDistributionSubsystem"]}];
implementors["polkadot_availability_recovery"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_availability_recovery/struct.AvailabilityRecoverySubsystem.html\" title=\"struct polkadot_availability_recovery::AvailabilityRecoverySubsystem\">AvailabilityRecoverySubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.AvailabilityRecoveryMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::AvailabilityRecoveryMessage\">AvailabilityRecoveryMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.AvailabilityRecoveryMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::AvailabilityRecoveryMessage\">AvailabilityRecoveryMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_availability_recovery::AvailabilityRecoverySubsystem"]}];
implementors["polkadot_collator_protocol"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_collator_protocol/struct.CollatorProtocolSubsystem.html\" title=\"struct polkadot_collator_protocol::CollatorProtocolSubsystem\">CollatorProtocolSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.CollatorProtocolMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::CollatorProtocolMessage\">CollatorProtocolMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.CollatorProtocolMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::CollatorProtocolMessage\">CollatorProtocolMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Context as <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&gt;::<a class=\"type\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html#associatedtype.Sender\" title=\"type polkadot_node_subsystem::SubsystemContext::Sender\">Sender</a>: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemSender.html\" title=\"trait polkadot_node_subsystem::SubsystemSender\">SubsystemSender</a>,&nbsp;</span>","synthetic":false,"types":["polkadot_collator_protocol::CollatorProtocolSubsystem"]}];
implementors["polkadot_dispute_distribution"] = [{"text":"impl&lt;Context, AD&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_dispute_distribution/struct.DisputeDistributionSubsystem.html\" title=\"struct polkadot_dispute_distribution::DisputeDistributionSubsystem\">DisputeDistributionSubsystem</a>&lt;AD&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.DisputeDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::DisputeDistributionMessage\">DisputeDistributionMessage</a>&gt; + <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.DisputeDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::DisputeDistributionMessage\">DisputeDistributionMessage</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AD: <a class=\"trait\" href=\"polkadot_node_network_protocol/authority_discovery/trait.AuthorityDiscovery.html\" title=\"trait polkadot_node_network_protocol::authority_discovery::AuthorityDiscovery\">AuthorityDiscovery</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["polkadot_dispute_distribution::DisputeDistributionSubsystem"]}];
implementors["polkadot_gossip_support"] = [{"text":"impl&lt;Context, AD&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_gossip_support/struct.GossipSupport.html\" title=\"struct polkadot_gossip_support::GossipSupport\">GossipSupport</a>&lt;AD&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.GossipSupportMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::GossipSupportMessage\">GossipSupportMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.GossipSupportMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::GossipSupportMessage\">GossipSupportMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;AD: <a class=\"trait\" href=\"polkadot_node_network_protocol/authority_discovery/trait.AuthorityDiscovery.html\" title=\"trait polkadot_node_network_protocol::authority_discovery::AuthorityDiscovery\">AuthorityDiscovery</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["polkadot_gossip_support::GossipSupport"]}];
implementors["polkadot_network_bridge"] = [{"text":"impl&lt;Net, AD, Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_network_bridge/struct.NetworkBridge.html\" title=\"struct polkadot_network_bridge::NetworkBridge\">NetworkBridge</a>&lt;Net, AD&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Net: Network + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AD: <a class=\"trait\" href=\"polkadot_node_network_protocol/authority_discovery/trait.AuthorityDiscovery.html\" title=\"trait polkadot_node_network_protocol::authority_discovery::AuthorityDiscovery\">AuthorityDiscovery</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.NetworkBridgeMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::NetworkBridgeMessage\">NetworkBridgeMessage</a>&gt; + <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.NetworkBridgeMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::NetworkBridgeMessage\">NetworkBridgeMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_network_bridge::NetworkBridge"]}];
implementors["polkadot_node_collation_generation"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_collation_generation/struct.CollationGenerationSubsystem.html\" title=\"struct polkadot_node_collation_generation::CollationGenerationSubsystem\">CollationGenerationSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.CollationGenerationMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::CollationGenerationMessage\">CollationGenerationMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.CollationGenerationMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::CollationGenerationMessage\">CollationGenerationMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_collation_generation::CollationGenerationSubsystem"]}];
implementors["polkadot_node_core_approval_voting"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_approval_voting/struct.ApprovalVotingSubsystem.html\" title=\"struct polkadot_node_core_approval_voting::ApprovalVotingSubsystem\">ApprovalVotingSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.ApprovalVotingMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::ApprovalVotingMessage\">ApprovalVotingMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.ApprovalVotingMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::ApprovalVotingMessage\">ApprovalVotingMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_core_approval_voting::ApprovalVotingSubsystem"]}];
implementors["polkadot_node_core_av_store"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_av_store/struct.AvailabilityStoreSubsystem.html\" title=\"struct polkadot_node_core_av_store::AvailabilityStoreSubsystem\">AvailabilityStoreSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.AvailabilityStoreMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::AvailabilityStoreMessage\">AvailabilityStoreMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.AvailabilityStoreMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::AvailabilityStoreMessage\">AvailabilityStoreMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_core_av_store::AvailabilityStoreSubsystem"]}];
implementors["polkadot_node_core_candidate_validation"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_candidate_validation/struct.CandidateValidationSubsystem.html\" title=\"struct polkadot_node_core_candidate_validation::CandidateValidationSubsystem\">CandidateValidationSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.CandidateValidationMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::CandidateValidationMessage\">CandidateValidationMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.CandidateValidationMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::CandidateValidationMessage\">CandidateValidationMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_core_candidate_validation::CandidateValidationSubsystem"]}];
implementors["polkadot_node_core_chain_api"] = [{"text":"impl&lt;Client, Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_chain_api/struct.ChainApiSubsystem.html\" title=\"struct polkadot_node_core_chain_api::ChainApiSubsystem\">ChainApiSubsystem</a>&lt;Client&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: HeaderBackend&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.Block.html\" title=\"type polkadot_core_primitives::Block\">Block</a>&gt; + AuxStore + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.ChainApiMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::ChainApiMessage\">ChainApiMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.ChainApiMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::ChainApiMessage\">ChainApiMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_core_chain_api::ChainApiSubsystem"]}];
implementors["polkadot_node_core_chain_selection"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_chain_selection/struct.ChainSelectionSubsystem.html\" title=\"struct polkadot_node_core_chain_selection::ChainSelectionSubsystem\">ChainSelectionSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.ChainSelectionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::ChainSelectionMessage\">ChainSelectionMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.ChainSelectionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::ChainSelectionMessage\">ChainSelectionMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_core_chain_selection::ChainSelectionSubsystem"]}];
implementors["polkadot_node_core_dispute_coordinator"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_dispute_coordinator/struct.DisputeCoordinatorSubsystem.html\" title=\"struct polkadot_node_core_dispute_coordinator::DisputeCoordinatorSubsystem\">DisputeCoordinatorSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.DisputeCoordinatorMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::DisputeCoordinatorMessage\">DisputeCoordinatorMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.DisputeCoordinatorMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::DisputeCoordinatorMessage\">DisputeCoordinatorMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_core_dispute_coordinator::dummy::DisputeCoordinatorSubsystem"]}];
implementors["polkadot_node_core_dispute_participation"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_dispute_participation/struct.DisputeParticipationSubsystem.html\" title=\"struct polkadot_node_core_dispute_participation::DisputeParticipationSubsystem\">DisputeParticipationSubsystem</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: SubsystemContext&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.DisputeParticipationMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::DisputeParticipationMessage\">DisputeParticipationMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.DisputeParticipationMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::DisputeParticipationMessage\">DisputeParticipationMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_core_dispute_participation::DisputeParticipationSubsystem"]}];
implementors["polkadot_node_core_runtime_api"] = [{"text":"impl&lt;Client, Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_core_runtime_api/struct.RuntimeApiSubsystem.html\" title=\"struct polkadot_node_core_runtime_api::RuntimeApiSubsystem\">RuntimeApiSubsystem</a>&lt;Client&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: ProvideRuntimeApi&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.Block.html\" title=\"type polkadot_core_primitives::Block\">Block</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client::Api: <a class=\"trait\" href=\"polkadot_primitives/v1/trait.ParachainHost.html\" title=\"trait polkadot_primitives::v1::ParachainHost\">ParachainHost</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.Block.html\" title=\"type polkadot_core_primitives::Block\">Block</a>&gt; + BabeApi&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.Block.html\" title=\"type polkadot_core_primitives::Block\">Block</a>&gt; + AuthorityDiscoveryApi&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.Block.html\" title=\"type polkadot_core_primitives::Block\">Block</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.RuntimeApiMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::RuntimeApiMessage\">RuntimeApiMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.RuntimeApiMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::RuntimeApiMessage\">RuntimeApiMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_core_runtime_api::RuntimeApiSubsystem"]}];
implementors["polkadot_node_subsystem_test_helpers"] = [{"text":"impl&lt;M, Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_node_subsystem_test_helpers/struct.ForwardSubsystem.html\" title=\"struct polkadot_node_subsystem_test_helpers::ForwardSubsystem\">ForwardSubsystem</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = M&gt; + <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = M&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_node_subsystem_test_helpers::ForwardSubsystem"]}];
implementors["polkadot_statement_distribution"] = [{"text":"impl&lt;Context&gt; <a class=\"trait\" href=\"polkadot_overseer_gen/trait.Subsystem.html\" title=\"trait polkadot_overseer_gen::Subsystem\">Subsystem</a>&lt;Context, <a class=\"enum\" href=\"polkadot_node_subsystem_types/errors/enum.SubsystemError.html\" title=\"enum polkadot_node_subsystem_types::errors::SubsystemError\">SubsystemError</a>&gt; for <a class=\"struct\" href=\"polkadot_statement_distribution/struct.StatementDistribution.html\" title=\"struct polkadot_statement_distribution::StatementDistribution\">StatementDistribution</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_node_subsystem/trait.SubsystemContext.html\" title=\"trait polkadot_node_subsystem::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.StatementDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::StatementDistributionMessage\">StatementDistributionMessage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Context: <a class=\"trait\" href=\"polkadot_overseer_gen/trait.SubsystemContext.html\" title=\"trait polkadot_overseer_gen::SubsystemContext\">SubsystemContext</a>&lt;Message = <a class=\"enum\" href=\"polkadot_node_subsystem_types/messages/enum.StatementDistributionMessage.html\" title=\"enum polkadot_node_subsystem_types::messages::StatementDistributionMessage\">StatementDistributionMessage</a>&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_statement_distribution::StatementDistribution"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()